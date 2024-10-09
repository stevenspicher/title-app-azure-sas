
const {shareClient} = require("../AzureCredentials");

async function createFolder() {
    //TODO: pass in directory as variable
    const directoryPath = "CLIENTS/Other Clients/MCO/Wyoming/Campbell County/test";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    await directoryClient.create();
    console.log("Directory created");
}

createFolder().catch(e => {
    console.error("An error occurred: ", e.message);
});