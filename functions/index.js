/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
//
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");
const XLSX = require('xlsx');
const cors = require('cors')
const app = express()
app.use(cors({
  origin: '*' // or use "*" to allow all origins
}));

// Include your functions
// const createFolder = require('./components/createFolder');
// const deleteFolder = require('./components/deleteFolder');
// const uploadFile = require('./components/uploadFile');
// const deleteFile = require('./components/deleteFile');
// const getLinkToOneFile = require('./components/getLinkToOneFile');
// const getLinksToAllFilesInDirectory = require('./components/getLinksToFilesInDirectory');
const listFilesInDirectory = require('./components/listFilesInDirectory');
const getLinkToOneFile = require("./components/getLinkToOneFile");
const getFileData = require("./components/getFileData")

// app.get('/test', (req, res) => {
//   res.send('Hello from Express on Firebase!');
// });

// Define routes
// app.get('/create-folder', async (req, res) => {
//     const result = await createFolder();
//     res.send(result);
// });
//
// app.get('/delete-folder', async (req, res) => {
//     const result = await deleteFolder();
//     res.send(result);
// });
//
// app.get('/upload-file', async (req, res) => {
//     const result = await uploadFile();
//     res.send(result);
// });
//
// app.get('/delete-file', async (req, res) => {
//     const result = await deleteFile();
//     res.send(result);
// });
//
app.get('/get-link-to-file', async (req, res) => {
  try {
    let {fileName, folderPath} = req.query;
    const result = await getLinkToOneFile(fileName, folderPath);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// app.get('/get-xlsx-file-data', async (req, res) => {
//   try {
//     const url = req.query.url;
//     const response = await axios.get(url, {responseType: 'arraybuffer'});
//     const fileData = response.data;
//     const workbook = XLSX.read(fileData, {type: 'array'});
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//
//     const jsonArr = XLSX.utils.sheet_to_json(worksheet);
//     // Transforming each object in jsonArr array to an array of values.
//     const jsonData = jsonArr.map(obj  => Object.values(obj));
//     res.json(jsonData);
//
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });


app.get('/get-links-to-all-files', async (req, res) => {
    const result = await getLinksToAllFilesInDirectory();
    res.send(result);
});

app.get('/list-files-in-directory', async (req, res) => {

  try {
    let {folderPath} = req.query;
    const result = await listFilesInDirectory(folderPath);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


exports.app = functions.https.onRequest(app);
