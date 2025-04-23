const pool = require('../configs/dbConfig');

exports.findAll = async () => {
    const [rows] = await pool.execute('SELECT * FROM produtos');
    return rows;
};

exports.save = async (produto) => {
    const { nome, descricao, preco } = produto;
    const [result] = await pool.execute(
        'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)',
        [nome, descricao, preco]
    );
    return result.affectedRows === 1;
};

exports.update = async (produto) => {
    const { id, nome, descricao, preco } = produto;
    const [result] = await pool.execute(
        'UPDATE produtos SET nome=?, descricao=?, preco=? WHERE id=?',
        [nome, descricao, preco, id]
    );
    return result.affectedRows === 1;
};

exports.remove = async (id) => {
    const [result] = await pool.execute('DELETE FROM produtos WHERE id=?', [id]);
    return result.affectedRows === 1;
};
