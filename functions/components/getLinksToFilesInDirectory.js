
const { shareName, shareClient, credential } = require("../AzureCredentials");
const { generateFileSASQueryParameters, ShareSASPermissions } = require("@azure/storage-file-share");

async function getLinksToFilesInDirectory() {
    const directoryPath = "CLIENTS/Other Clients/MCO";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);

    let dirIter = directoryClient.listFilesAndDirectories();

    let directoryItem = await dirIter.next()
    while (!directoryItem.done) {
        if (directoryItem.value.kind === "file") {
                const fileClient = directoryClient.getFileClient(directoryItem.value.name);


            const sasToken = generateFileSASQueryParameters({
                shareName,
                filePath: fileClient.path,
                startsOn: new Date(),
                expiresOn: new Date(new Date().valueOf() + 2592000),
                permissions: ShareSASPermissions.parse("r"),
            }, credential).toString();


        }

        directoryItem = await dirIter.next()
    }
};

getLinksToFilesInDirectory().catch(e => {
    console.error("An error occurred: ", e.message);
});

module.exports = getLinksToFilesInDirectory;