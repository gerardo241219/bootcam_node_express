import UserModel from "../models/UserModel.js";

const createUser = (req, res) => {
    const { name, lastName, type } = req.body;

    // Validar que los datos no esten vacios

    if (name !== undefined && lastName !== undefined && type !== undefined) {
        UserModel.createUser({ name, lastName, type }, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err.message || 'Error al crear el usuario'
                })
            } else {
                return res.status(200).send({
                    message: 'Usuario creado exitosamente',
                    data
                })
            }
        })
    } else {
        return res.status(400).send({
            message: 'No se ha enviado la información completa'
        })
    }
}

const clientUsers = async (req, res) => {
    const { typeUserGet } = req.body;

    if (typeUserGet !== undefined) {
        UserModel.findClientUsers({ typeUserGet }, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err.message || 'Error al consultar los usuarios'
                })
            } else {
                return res.status(200).send({
                    message: 'Consulta exitosa',
                    data
                })
            }
        })
    } else {
        return res.status(400).send({
            message: 'No se ha enviado el tipo de usuario'
        })
    }
}

const updateUser = (req, res) => {
    res.send('Update User');
}

const deleteUser = (req, res) => {
    res.send('Delete User');
}

export {
    createUser,
    clientUsers,
    updateUser,
    deleteUser
}


// export default UserController;