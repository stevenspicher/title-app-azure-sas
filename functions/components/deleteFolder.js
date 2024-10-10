const {shareClient} = require("../AzureCredentials");

async function deleteFolder(folderPath) {
    let directoryPath = "CLIENTS/Other Clients/MCO";

    let fullPath =  directoryPath + "/" + folderPath;
    console.log(fullPath)
    const directoryClient = shareClient.getDirectoryClient(fullPath);

    await directoryClient.delete();
    console.log("Deleted directory");
}

deleteFolder().catch(e => {
    console.error("An error occurred: ", e.message);
});

module.exports = deleteFolder;