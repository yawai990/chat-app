const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('<h1>Welcome to my chat app</h1>')
});

module.exports = router;