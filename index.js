const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const cheerio = require('cheerio');

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`));
