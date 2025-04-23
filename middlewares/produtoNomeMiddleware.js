module.exports.validateName = (req, res, next) => {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ message: 'Campo "nome" é obrigatório' });
    next();
};
