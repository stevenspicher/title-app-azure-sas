const {shareClient } = require('../AzureCredentials');
const fs = require("fs");
async function uploadFile() {
    const fileName = "fileUploadTest.pdf";
    const filePath = "../fileUploadTest.pdf"
    const directoryPath = "CLIENTS/Other Clients/MCO/Wyoming/Campbell County/test";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    const fileClient = directoryClient.getFileClient(fileName);
    const fileData = fs.readFileSync(filePath);

    await fileClient.uploadData(fileData);
    console.log("Upload complete");
    return("Upload Completed")
}

uploadFile().catch(e => {
    console.error("An error occurred: ", e.message);
});