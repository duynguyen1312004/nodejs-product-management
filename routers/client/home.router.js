const express = require('express')

const router = express.Router();

//nhúng router vào controller
const controller = require("../../controllers/client/home.controller");

//*router trang products----------------------------------------------------------
router.get('/', controller.index);


module.exports = router;