const {shareName, shareClient, credential } = require("../AzureCredentials");

async function getLinkToOneFile(fileName, folderPath) {
    console.log("getting Link")
    let directoryPath = "CLIENTS/Other Clients/MCO";
    let fullPath;
if (typeof folderPath === "object") {

    let joinedFolderPath = folderPath.join("/");
   fullPath = directoryPath + "/" + joinedFolderPath + "/"
} else {fullPath = folderPath}
    const directoryClient = shareClient.getDirectoryClient(fullPath);
    const fileClient = directoryClient.getFileClient(fileName);

    const {generateFileSASQueryParameters, ShareSASPermissions} = require("@azure/storage-file-share");



    const sasToken = generateFileSASQueryParameters({
        shareName,
        filePath: fileClient.path,
        startsOn: new Date(),
        expiresOn: new Date(new Date().valueOf() + 2592000),
        permissions: ShareSASPermissions.parse("r"),
    }, credential).toString();

    return `${fileClient.url}?${sasToken}`

};


module.exports = getLinkToOneFile;