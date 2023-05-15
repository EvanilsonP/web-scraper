const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

app.use(cors());

const url = 'https://www.imdb.com/chart/top/';

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const articles = [];

            $('.titleColumn', html).each(function () {
                const title = $(this).text()
                const url = $(this).find('a').attr('href');
                articles.push({ title, url });
            })
            res.json(articles);
        }).catch(err => console.log(err));
});

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`));
