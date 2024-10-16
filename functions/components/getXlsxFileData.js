const XLSX = require("xlsx");
const axios = require("axios");

async function getXlsxFileData(req) {
    const url = req.query.url;

    // note the return statement
    return axios.get(url, {responseType: 'arraybuffer'}).then((res) => {
        const workbook = XLSX.read(res.data);
        let jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1});
        console.log(jsonData);
        return jsonData;
    });
};

module.exports = getXlsxFileData;