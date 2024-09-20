const {shareClient } = require('../AzureCredentials');


async function listFilesInDirectory() {
const fileList = [];
const folderList = [];
    const directoryPath = "CLIENTS/Other Clients/MCO";
    const directoryClient = shareClient.getDirectoryClient(directoryPath);


    console.log("List of directories and files under the root directory:");
    for await (const item of directoryClient.listFilesAndDirectories()) {
if (item.kind !== 'directory') {
        fileList.push(item.name)
}
        if (item.kind === 'directory') {
            folderList.push(item.name)
        }
        console.log(`Name: ${item.name}`);
        console.log(`Is directory: ${item.kind === 'directory'}`);
    }
    return {files: fileList, folders: folderList}


}

module.exports = listFilesInDirectory;



