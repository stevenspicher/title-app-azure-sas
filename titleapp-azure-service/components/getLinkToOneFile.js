const {shareName, shareClient, credential } = require("../AzureCredentials");

function getLinkToOneFile() {
    const fileName = "C&E26-525.pdf";
    const directoryPath = "CLIENTS/Other Clients/MCO/County Courthouse Scanned Documents/Johnson County/Johnson County Docs";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);
    const fileClient = directoryClient.getFileClient(fileName);

    const {generateFileSASQueryParameters, ShareSASPermissions} = require("@azure/storage-file-share");
    const sasToken = generateFileSASQueryParameters({
        shareName,
        filePath: fileClient.path,
        startsOn: new Date(),
        expiresOn: new Date(new Date().valueOf() + 86400),
        permissions: ShareSASPermissions.parse("r"),
    }, credential).toString();

    console.log(`${fileClient.url}?${sasToken}`);
    return `${fileClient.url}?${sasToken}`
};

getLinkToOneFile();
