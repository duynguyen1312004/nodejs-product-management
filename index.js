
//*Nhúng file env
require('dotenv').config();

//* Nhúng database vào 
const database = require("./config/database");
//*kết nối với database
database.connect();

const methodOverride = require('method-override');


//*cấu hình express---------------------------------------------------
const express = require('express')
const app = express()
const port = process.env.PORT;
//*.......................................................................
app.use(methodOverride('_method'));

//*nhúng routerAdmin vào------------------------------------------------------
const routeAdmin = require("./routers/admin/index.router"); 

//*nhúng router vào------------------------------------------------------
const route = require("./routers/client/index.router");

//*nhúng file system vào

const systemConfig = require("./config/system");


//*routes
route(app);
routeAdmin(app);


//*cấu hình pug vào dự án ----------------------------------------------------
app.set("views", "./views");
app.set("view engine", "pug");
//*--------------------------------------------------------------------------------


//* tạo ra biến toàn cục để file pug nào cũng dùng được
app.locals.prefixAdmin = systemConfig.prefixAdmin;


//*cấu hình file tĩnh
app.use(express.static('public'))//* muốn public cái gì đó phải thêm dòng này


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


