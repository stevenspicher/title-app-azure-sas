// Import express
const express = require('express');
var cors = require('cors')
var app = express()
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
// app.get('/get-link-to-file', async (req, res) => {
//     const result = await getLinkToOneFile();
//     res.send(result);
// });

// app.get('/get-links-to-all-files', async (req, res) => {
//     const result = await getLinksToAllFilesInDirectory();
//     res.send(result);
// });

app.get('/list-files-in-directory', async (req, res) => {
    const result = await listFilesInDirectory();
    res.send(result);
});

// Start server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));