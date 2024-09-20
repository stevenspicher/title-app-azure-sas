const {shareClient} = require("../AzureCredentials");

async function deleteFolder() {
    const directoryPath = "CLIENTS/Other Clients/MCO/Wyoming/Campbell County/test";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    await directoryClient.delete();
    console.log("Deleted directory");
}

// deleteFolder().catch(e => {
//     console.error("An error occurred: ", e.message);
// });

