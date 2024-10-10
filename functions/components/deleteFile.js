const {shareClient} = require("../AzureCredentials");

async function deleteFile(folderPath, fileName) {
    let directoryPath = "CLIENTS/Other Clients/MCO";

    let fullPath =  directoryPath + "/" + folderPath;
    const directoryClient = shareClient.getDirectoryClient(fullPath);
    const fileClient = directoryClient.getFileClient(fileName);

    await fileClient.delete();
    console.log("Deleted file");
}

deleteFile().catch(e => {
    console.error("An error occurred: ", e.message);
});

module.exports = deleteFile;