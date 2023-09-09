const daoProduct = require('../dao/product.dao');

exports.listProducts= async ({},products) =>{
    try {
        products = products.product_id
        const result = await daoProduct.daoFindProductById(products);
        return (result);
    } catch (err) {
        throw err;
    }
}
//TODO
exports.readjustmentPrice= async (params, products) =>{
    try {

        return ("output");

    } catch (err) {
        throw err;
    }
}
//TODO
exports.updateProducts= async (params, products) =>{
    try {
        return "output";

    } catch (err) {
        throw err;
    }
}

//TODO
exports.updatePacks= async (params, packs ) =>{
    try {

        return "output";

    } catch (err) {
        throw err;
    }
}

exports.findById = async (products, params) => {
    try {
        products.product_id= params.id;
        await daoProduct.daoFindProductById(products);
        return 'output';
    } catch (err) {
        throw err;
    }
};