
const {shareClient} = require("../AzureCredentials");

async function createFolder(folderPath) {
    let directoryPath = "CLIENTS/Other Clients/MCO";

   let fullPath =  directoryPath + "/" + folderPath;


    const directoryClient = shareClient.getDirectoryClient(fullPath);

   await directoryClient.create();
    console.log("Directory created");
}

// createFolder().catch(e => {
//     console.error("An error occurred: ", e.message);
// });

module.exports = createFolder;