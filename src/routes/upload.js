// const route = require('express').Router();

// route.post('/upload' , (req , res) => {
//    try{
//     let uploadFile = req.files.file;
//     const name = uploadFile.name;
//     const min = 1000;
//     const max = 9999;
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     const num = randomNum.toString();
//     const saveAs = `${num}_${name}`;
//     uploadFile.mv(`${__dirname}/uploads/${saveAs}`, function(err) {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       return res.status(200).json({ status: 'uploaded', name, saveAs });
//     });
//    }catch(e){
//     res.status(400).send("Error: " , e.message);
//    }
// })


// module.exports = route