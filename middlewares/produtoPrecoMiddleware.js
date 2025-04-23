module.exports.validatePrice = (req, res, next) => {
    const { preco } = req.body;
    if (preco == null || isNaN(parseFloat(preco))) {
        return res.status(400).json({ message: 'Campo "preco" inválido' });
    }
    next();
};
