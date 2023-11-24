import express, { Request, Response, Router } from 'express';
import AWS from 'aws-sdk';
import { Readable } from 'stream';
import pinataSdk from '@pinata/sdk';
const NEXT_PUBLIC_PINATA_API_KEY = "f87c52f05b83c1cb42d7";
const NEXT_PUBLIC_PINATA_API_SECRET = "c45621056ed93aaebc3640ca9a373ea5653b040e99dc6df7031b00d379e016ba";
const NEXT_PUBLIC_PINATA_API_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjM2NmOWYzNC0zOGNiLTRmNTQtYThlOS02ODE4MjA5OTNkZmIiLCJlbWFpbCI6ImFyc2xhbmtoYW5AcGl4cGVsLmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY4N2M1MmYwNWI4M2MxY2I0MmQ3Iiwic2NvcGVkS2V5U2VjcmV0IjoiYzQ1NjIxMDU2ZWQ5M2FhZWJjMzY0MGNhOWEzNzNlYTU2NTNiMDQwZTk5ZGM2ZGY3MDMxYjAwZDM3OWUwMTZiYSIsImlhdCI6MTY5OTQ1Mzk3M30.9y2xV - AdgU7HGmxQ1f1 - 5j23q - kyYybHWNaFsEOrkRo";
const sdk = require('api')('@pinata-cloud/v1.0#12ai2blmsggcsb');

AWS.config.update({
  accessKeyId: "AKIA2QRNOOF3G2N4S6K6",
  secretAccessKey: "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",
  region: "ap-south-1"
});

const sns = new AWS.SNS();
const pinata = new pinataSdk(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_API_SECRET);

const route = Router();

route.post('/addJson', async (req: Request, res: Response) => {
  try {
    const { name, description, url, attributes } = req.body;

    await pinata.testAuthentication().then((data) => {
      console.log("Running: ", data);
    }).catch((e) => {
      console.log(e.message);
    });

    const jsonContent = {
      name: name,
      description: description,
      display: {
        url: url
      },
      attributes: attributes,
    };

    const options:any = {
      pinataMetadata: {
        name: name,
        keyvalues: {
          type: 'JSON',
        },
        pinataOptions: {
          cidVersion: 0,
        },
      },
    };

    const sdkResult = await sdk.postPinningPinjsontoipfs({ pinataContent: jsonContent });
    console.log("SDK Result: ", sdkResult);

    const readableStream = new Readable();
    readableStream.push(JSON.stringify(jsonContent));
    readableStream.push(null);

    const result = await pinata.pinFileToIPFS(readableStream, options);
    console.log("Pinata Result: ", result);
    res.send(result);
  } catch (e:any) {
    res.status(400).send(e.message);
    console.log("ERROR: " + e);
  }
});

export default route;
