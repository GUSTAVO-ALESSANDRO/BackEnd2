module.exports.validateAge = (req, res, next) => {
  const { idade } = req.body;
  const age = parseInt(idade, 10);
  if (isNaN(age)) return res.status(400).json({ message: 'Campo "idade" inválido' });
  if (age < 0 || age > 130) return res.status(400).json({ message: 'Campo "idade" fora de intervalo' });
  next();
};
