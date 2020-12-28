const express = require('express');
const router = express.Router();
const Pusher = require("pusher");


const pusher = new Pusher({
    appId: "1129349",
    key: "295d0de0c7b7f39950a3",
    secret: "4a12e9f7d15bd4e33204",
    cluster: "eu",
    useTLS: true
});


router.get('/', (req, res) => {
    res.send('POLL')
})

router.post('/', (req, res) => {
    pusher.trigger("os-poll", "os-vote", {
        points: 1,
        os: req.body.os
    });
    return res.json({ success: true, message: 'Thanks for voting' })
})

module.exports = router
