
//*[GET] /
module.exports.index = (req, res) => {
    res.render("client/pages/home/index",{
        pageTitle: "Trang Chủ"
    });//?truy cập vào pug
}