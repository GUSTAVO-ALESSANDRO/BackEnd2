const pool = require('../configs/dbConfig');

exports.findAll = async () => {
    const [rows] = await pool.execute('SELECT * FROM clientes');
    return rows;
};

exports.save = async (cliente) => {
    const { nome, sobrenome, email, idade } = cliente;
    const [result] = await pool.execute(
        'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
        [nome, sobrenome, email, idade]
    );
    return result.affectedRows === 1;
};

exports.update = async (cliente) => {
    const { id, nome, sobrenome, email, idade } = cliente;
    const [result] = await pool.execute(
        'UPDATE clientes SET nome=?, sobrenome=?, email=?, idade=? WHERE id=?',
        [nome, sobrenome, email, idade, id]
    );
    return result.affectedRows === 1;
};

exports.remove = async (id) => {
    const [result] = await pool.execute('DELETE FROM clientes WHERE id=?', [id]);
    return result.affectedRows === 1;
};
