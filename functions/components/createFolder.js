
const {shareClient} = require("../AzureCredentials");

async function createFolder(directoryPath) {
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    await directoryClient.create();
    console.log("Directory created");
}

createFolder().catch(e => {
    console.error("An error occurred: ", e.message);
});

module.exports = createFolder;