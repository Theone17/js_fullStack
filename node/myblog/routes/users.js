const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
    // res.send('hello,' + req.params.name);
    res.render('users', {
        name: req.params.name,
        supplies: ['吃饭', '睡觉', '打豆豆']
    })
})

module.exports = router;