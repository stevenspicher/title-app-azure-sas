


async function getFileData(req) {
    app.get('/getfile', async (req, res) => {
        try {
            const url = req.query.url;
            const response = await axios.get(url, {responseType: 'arraybuffer'});
            const fileData = response.data;

            res.json(fileData);
        } catch (error) {
            res.status(500).send(error);
        }
    });
};
module.exports = getFileData;