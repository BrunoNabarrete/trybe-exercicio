const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
    try{
        const users = await UserService.getAll();
        return res.status(200).json(users);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.getById(id);

        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

        return res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ message: error500Message})
    }
};

const getbyIdAndEmail = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.query;
        const user = await UserService.getByIdAndEmail(id, email);

        if (!user) return res.status(404).json({ message: 'Usuário não encontrado'})

        return res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ message: error500Message})
    }
}

const createUser = async (req, res) => {
    try {
        const { fullName, email } = req.body;
        const newUser = await UserService.createUser(fullName, email);

        return res.status(201).json(newUser)
    } catch (e) {
        res.status(500).json({ message: error500Message});
    }
};

const updateUser = async(req, res) => {
    try {
        const { fullName, email } = req.body;
        const { id } = req.params;
        const updateUser = await UserService.updateUser(id, fullName, email);

        if (!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });
    } catch (e) {
        res.status(500).json({ message: error500Message });
    }
};

const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);

        return res.status(200).json({ message: 'Usuário excluido com sucesso '});
    } catch (e) {
        res.status(500).json({ message: error500Message });
    }
}

module.exports = {
    getAll,
    getById,
    getbyIdAndEmail,
    createUser,
    updateUser,
    deleteUser,
}