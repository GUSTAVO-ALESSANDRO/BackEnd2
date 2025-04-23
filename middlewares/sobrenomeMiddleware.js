module.exports.validateFamilyName = (req, res, next) => {
  const { sobrenome } = req.body;
  if (!sobrenome) return res.status(400).json({ message: 'Campo "sobrenome" é obrigatório' });
  if (typeof sobrenome !== 'string' || sobrenome.trim() === '') {
      return res.status(400).json({ message: 'Campo "sobrenome" inválido' });
  }
  next();
};
