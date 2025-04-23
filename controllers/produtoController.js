const service = require('../services/produtoService');

exports.findAll = async (req, res) => {
    const produtos = await service.findAll();
    res.json(produtos);
};

exports.save = async (req, res) => {
    const ok = await service.save(req.body);
    ok ? res.status(201).end() : res.status(400).json({ error: 'Falha ao salvar' });
};

exports.update = async (req, res) => {
    const ok = await service.update(req.body);
    ok ? res.end() : res.status(400).json({ error: 'Falha ao atualizar' });
};

exports.remove = async (req, res) => {
    const ok = await service.remove(req.params.id);
    ok ? res.end() : res.status(400).json({ error: 'Falha ao remover' });
};
