// require('dotenv').config();
// const fs = require('fs');
// const route = require('express').Router();
// const pinataSdk = require('@pinata/sdk');
// const { NEXT_PUBLIC_PINATA_API_KEY
//     , NEXT_PUBLIC_PINATA_API_SECRET
//     , NEXT_PUBLIC_PINATA_API_JWT } = process.env


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
//     try {
//         const { name, description, url, attributes } = req.body;

//         const pinata = new pinataSdk(NEXT_PUBLIC_PINATA_API_KEY, NEXT_PUBLIC_PINATA_API_SECRET);
//         const tempFilePath = `${__dirname}/temp.json`; 

//         await pinata.testAuthentication().then((data) => {
//             console.log("Running: ", data);
//         }).catch((e) => {
//             console.log(e.message);
//         });

//         const jsonContent = {
//             name: name,
//             description: description,
//             display: {
//                 url: url
//             },
//             attributes: attributes,
//         };



//         const jsonString = JSON.stringify(jsonContent);
//         fs.writeFileSync(tempFilePath, jsonString);

//         const readableStreamFile = fs.createReadStream(tempFilePath);

//         const options = {
//             pinataMetadata: {
//                 name: name,
//                 keyvalues: {
//                     type: 'JSON',
//                 },
//                 pinataOptions: {
//                     cidVersion: 0,
//                 },
//             },
//         };
//         const result = await pinata.pinFileToIPFS(readableStreamFile, options);
//         console.log(result);
//         res.send(result);
//     } catch (e) {
//         res.status(400).send(e.message);
//         console.log("ERROR: " + e);
//     }
// });
// module.exports = route;
