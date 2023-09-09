const serviceProduct = require('../services/product.service');

exports.readjustmentPrice= async (req, res) => {
    try {
        const output = await serviceProduct.readjustmentPrice(req.params, req.body);
        console.log(output)
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product. Detail: ' + err.detail, param: null }] });
    }
};

exports.listProducts = async (req, res) => {
    try {
        const output = await serviceProduct.listProducts({}, req.body);
        res.status(200).json(output);
    } catch (err) {
        res.status(500).json({ errors: [{ location: req.path, msg: 'Could not query table product. Detail: ' + err.detail, param: null }] });
    }
};

