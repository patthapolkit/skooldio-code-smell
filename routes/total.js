const express = require('express');
const router = express.Router();
const total = require('../total')
const convert = require('../convert')

router.post('/total', (req, res) => {
    const { body } = req;
    var values = body.values;
    var result = total(values);
    var convertResult = convert(result);
    res.json(convertResult);
});

module.exports = router;