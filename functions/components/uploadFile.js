const {shareClient } = require('../AzureCredentials');
const fs = require("fs");
async function uploadFile(folderPath, fileName, fileData, ) {
    const directoryPath = "CLIENTS/Other Clients/MCO"
    let fullPath =  directoryPath + "/" + folderPath;

    const directoryClient = shareClient.getDirectoryClient(fullPath);
    const fileClient = directoryClient.getFileClient(fileName);

    await fileClient.uploadData(fileData);
    console.log("Upload complete");
    return("Upload Completed")
}

uploadFile().catch(e => {
    console.error("An error occurred: ", e.message);
});

module.exports = uploadFile;