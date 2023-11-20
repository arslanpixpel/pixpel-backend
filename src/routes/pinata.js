require('dotenv').config();
const fs = require('fs');
const route = require('express').Router();
const pinataSdk = require('@pinata/sdk');
const NEXT_PUBLIC_PINATA_API_KEY = "f87c52f05b83c1cb42d7";
const NEXT_PUBLIC_PINATA_API_SECRET = "c45621056ed93aaebc3640ca9a373ea5653b040e99dc6df7031b00d379e016ba";
const NEXT_PUBLIC_PINATA_API_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjM2NmOWYzNC0zOGNiLTRmNTQtYThlOS02ODE4MjA5OTNkZmIiLCJlbWFpbCI6ImFyc2xhbmtoYW5AcGl4cGVsLmlvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY4N2M1MmYwNWI4M2MxY2I0MmQ3Iiwic2NvcGVkS2V5U2VjcmV0IjoiYzQ1NjIxMDU2ZWQ5M2FhZWJjMzY0MGNhOWEzNzNlYTU2NTNiMDQwZTk5ZGM2ZGY3MDMxYjAwZDM3OWUwMTZiYSIsImlhdCI6MTY5OTQ1Mzk3M30.9y2xV - AdgU7HGmxQ1f1 - 5j23q - kyYybHWNaFsEOrkRo";
const sdk = require('api')('@pinata-cloud/v1.0#12ai2blmsggcsb');

// route.post('/add', (req, res) => {
//     try {
//         const { name, imgPath } = req.body;
//         let _dirname = `${__dirname}/uploads/${imgPath}`;
//         const pinata = new pinataSdk(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_API_SECRET);
//         pinata.testAuthentication().then((data) => {
//             console.log("Running: ", data);
//         }).catch((e) => {
//             console.log(e.message);
//         })
//         const fs = require('fs');
//         const readableStreamFile = fs.createReadStream(_dirname);
//         const options = {
//             pinataMetadata: {
//                 name: name,
//                 keyvalues: {
//                     place: 'Bled Solvonia Lake',
//                     thing: 'lake'
//                 },
//                 pinataOptions: {
//                     cidVersion: 0
//                 }

//             }
//         }

//         const data = pinata.pinFileToIPFS(readableStreamFile, options).then((result) => {
//             console.log(result);
//             res.send(result);
//         }).catch((e) => {
//             console.log(e.message);
//         })
//     }
//     catch (e) {
//         res.status(400).send("ERROR : ".e);
//         console.log("ERROR : ".e);
//     }

// });

// // route.post('/check' , (req , res) => {
// //      const {check} = req.body;
// //      try{
// //         res.send(check);
// //      }catch(e){
// //         console.log(e.message);
// //      }

// //     })


// route.post('/addJson', async (req, res) => {
// //     try {
// //         const { name, description, url, attributes } = req.body;

// //         const pinata = new pinataSdk(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_API_SECRET);
// //         const _tempFilePath = `${__dirname}/temp.json`; 
// //         const tempFilePath = `D:/nft-marketplace/public/assets/temp.json`; 

// //         await pinata.testAuthentication().then((data) => {
// //             console.log("Running: ", data);
// //         }).catch((e) => {
// //             console.log(e.message);
// //         });

// //         const jsonContent = {
// //             name: name,
// //             description: description,
// //             display: {
// //                 url: url
// //             },
// //             attributes: attributes,
// //         };



// //         const jsonString = JSON.stringify(jsonContent);
// //         fs.writeFileSync(tempFilePath, jsonString);

// //         const readableStreamFile = fs.createReadStream(tempFilePath);

// //         const options = {
// //             pinataMetadata: {
// //                 name: name,
// //                 keyvalues: {
// //                     type: 'JSON',
// //                 },
// //                 pinataOptions: {
// //                     cidVersion: 0,
// //                 },
// //             },
// //         };
// //         const result = await pinata.pinFileToIPFS(readableStreamFile, options);
// //         console.log(result);
// //         res.send(result);
// //     } catch (e) {
// //         res.status(400).send(e.message);
// //         console.log("ERROR: " + e);
// //     }
//  });


route.post('/addJson', async (req, res) => {
    try {
        const { name, description, url, attributes } = req.body;

        const pinata = new pinataSdk(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_API_SECRET);

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

        const options = {
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

        // Using the provided SDK code here
        const sdkResult = await sdk.postPinningPinjsontoipfs({ pinataContent: jsonContent });
        console.log("SDK Result: ", sdkResult);

        // Convert JSON content to readable stream
        const readableStream = new Readable();
        readableStream.push(JSON.stringify(jsonContent));
        readableStream.push(null);

        // Continue with the rest of your existing logic
        const result = await pinata.pinFileToIPFS(readableStream, options);
        console.log("Pinata Result: ", result);
        res.send(result);
    } catch (e) {
        res.status(400).send(e.message);
        console.log("ERROR: " + e);
    }
});
module.exports = route;
