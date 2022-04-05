const {list} = require('../models/services/productsService');

exports.widgets = async(req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = page * perPage;

    const count = (await list()).length;
    const totalPage = Math.ceil(count / perPage);
    let pagePrev = page - 1;
    let pageNext = page + 1;
    if(pageNext > totalPage)
        pageNext = totalPage;
    else if(pagePrev < 1)
        pagePrev = 1;

    const products = (await list()).slice(start, end);

    res.render('widgets', { 
        products, perPage, totalPage,
        pages: Array.from(Array(totalPage).keys()).map(i => i+1),
        pagePrev, pageNext,
        pageCurrent: page
    });
} 