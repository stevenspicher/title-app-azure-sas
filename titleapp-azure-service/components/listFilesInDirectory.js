// const {shareClient } = require('../AzureCredentials');
// const getLinkToOneFile = require('./getLinkToOneFile');
//
//
// async function listFilesInDirectory(folderPath) {
//     console.log(folderPath);
// const fileList = [];
// const folderList = [];
//     let directoryPath = "CLIENTS/Other Clients/MCO";
//     if (folderPath !== undefined) {
//     if (folderPath.length > 0) {
//         directoryPath += "/" + folderPath.join('/');
//
//          // directoryPath = "CLIENTS/Other Clients/MCO/" + folderPath;
//     }}
//     const directoryClient = shareClient.getDirectoryClient(directoryPath);
//
//
//     console.log("List of directories and files under the root directory:");
//     for await (const item of directoryClient.listFilesAndDirectories()) {
// if (item.kind !== 'directory') {
//     const fileUrl = await getLinkToOneFile(item.name, directoryPath)
//         fileList.push({name: item.name, url: fileUrl})
// }
//         if (item.kind === 'directory') {
//             folderList.push(item.name)
//         }
//         console.log(`Name: ${item.name}`);
//         console.log(`Is directory: ${item.kind === 'directory'}`);
//     }
//     return {files: fileList, folders: folderList}
//
//
// }
//
// module.exports = listFilesInDirectory;

const {shareClient } = require('../AzureCredentials');
const getLinkToOneFile = require('./getLinkToOneFile');

async function listFilesInDirectory(folderPath) {
    console.log(folderPath);
    const fileList = [];
    const folderList = [];
    let directoryPath = "CLIENTS/Other Clients/MCO";
    if (folderPath !== undefined && directoryPath !== undefined) {
        if (folderPath.length > 0) {
            directoryPath += "/" + folderPath.join('/');
        }
    }

    try {
        const directoryClient = shareClient.getDirectoryClient(directoryPath);


        for await (const item of directoryClient.listFilesAndDirectories()) {
            if (item.kind !== 'directory') {
                const fileUrl = await getLinkToOneFile(item.name, directoryPath)
                fileList.push({name: item.name, url: fileUrl})
            }
            if (item.kind === 'directory') {
                folderList.push(item.name)
            }

        }
        return {files: fileList, folders: folderList}
    } catch (error) {
        console.error('Error reading directory:', error);
    }

}
module.exports = listFilesInDirectory;

