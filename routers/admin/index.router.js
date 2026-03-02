
const systemConfig = require("../../config/system");

const dashboardRoutes = require("./dashboard.router");
const productRoutes = require("./product.router");

module.exports = (app) => {

    const PATH_ADMIN = systemConfig.prefixAdmin; //tách ra dị cho dễ bảo trì

    app.use(PATH_ADMIN + '/dashboard', dashboardRoutes);
    
    app.use(PATH_ADMIN + '/products', productRoutes);

}