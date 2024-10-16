
const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors')
const XLSX = require("xlsx")
const fileParser = require('express-multipart-file-parser');
const app = express()
app.use(cors({
  origin: '*' // or use "*" to allow all origins
}));
app.use(fileParser)

// Include your functions
const createFolder = require('./components/createFolder');
const getLinksToAllFilesInDirectory = require('./components/getLinksToFilesInDirectory');
const listFilesInDirectory = require('./components/listFilesInDirectory');
const getLinkToOneFile = require("./components/getLinkToOneFile");
const uploadFile = require("./components/uploadFile");
const deleteFolder = require("./components/deleteFolder");
const deleteFile = require("./components/deleteFile");
const getXlsxFileData = require("./components/getXlsxFileData");


// Define routes
app.get('/create-folder', async (req, res) => {
  try {
    let {folderPath} = req.query;
    const result = await createFolder(folderPath);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/delete-folder', async (req, res) => {
  try {
    let {folderPath} = req.query;
  const result = await deleteFolder(folderPath);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/upload-file', async (req, res) => {
  try {

  const folderPath = req.body.folderPath;
  const fileName = req.files[0].originalname;
  const fileData = req.files[0].buffer
  const result = await uploadFile(folderPath, fileName, fileData);
  res.send(result);
} catch (error) {
  res.status(500).send(error);
}


});



app.get('/delete-file', async (req, res) => {
  try {
    let {folderPath, fileName} = req.query;
    const result = await deleteFile(folderPath, fileName);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/get-link-to-file', async (req, res) => {
  try {
    let {fileName, folderPath} = req.query;
    const result = await getLinkToOneFile(fileName, folderPath);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/get-xlsx-data', async (req, res) => {
  try {
    const result = await getXlsxFileData(req)
    console.log(result)
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


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


//exports.app = functions.https.onRequest(app);

//uncomment to test locally:

app.listen(3000, () => console.log('Server running on port 3000'));
