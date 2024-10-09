require('dotenv').config({ path: require('path').resolve(__dirname, './.env') });
const {StorageSharedKeyCredential, ShareServiceClient} = require("@azure/storage-file-share");


const accountName = process.env.AZURE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_ACCOUNT_KEY;
const shareName = process.env.AZURE_ACCOUNT_SHARENAME;
const defaultEndpointsProtocol = process.env.AZURE_DEFAULTENDPOINTSPROTOCOL;
const accountUrl = `${defaultEndpointsProtocol}://${accountName}.file.core.windows.net`;
const credential = new StorageSharedKeyCredential(accountName, accountKey);
const serviceClient = new ShareServiceClient(
    accountUrl,
    credential
);

const shareClient = serviceClient.getShareClient(shareName);

module.exports = {
    accountName,
    accountKey,
    shareName,
    defaultEndpointsProtocol,
    accountUrl,
    credential,
    serviceClient,
    shareClient
};