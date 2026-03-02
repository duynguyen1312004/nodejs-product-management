
const productRouter = require("./product.router");
const homeRouter = require("./home.router");

module.exports = (app) =>{
        //*router trang chủ------------------------------------------------------------------------------------------------
    app.use('/', homeRouter);

    //*router trang products----------------------------------------------------------
    app.use('/products',productRouter);

}