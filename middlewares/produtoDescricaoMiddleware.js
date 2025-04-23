module.exports.validateDescription = (req, res, next) => {
    const { descricao } = req.body;
    if (!descricao) return res.status(400).json({ message: 'Campo "descricao" é obrigatório' });
    next();
};
