const {shareClient} = require("../AzureCredentials");

async function deleteFolder(directoryPath) {
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    await directoryClient.delete();
    console.log("Deleted directory");
}

deleteFolder().catch(e => {
    console.error("An error occurred: ", e.message);
});

