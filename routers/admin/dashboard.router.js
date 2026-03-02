const express = require('express')

const router = express.Router();

//nhúng router vào controller
const controller = require("../../controllers/admin/dashboard.controller");

router.get('/', controller.dashboard);


module.exports = router;