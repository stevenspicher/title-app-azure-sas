const {shareClient} = require("../AzureCredentials");

async function deleteFile(directoryPath, fileName) {
    const directoryClient = shareClient.getDirectoryClient(directoryPath);
    const fileClient = directoryClient.getFileClient(fileName);

    await fileClient.delete();
    console.log("Deleted file");
}

deleteFile().catch(e => {
    console.error("An error occurred: ", e.message);
});