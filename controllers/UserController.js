import UserModel from "../models/UserModel.js";

const createUser = (req, res) => {
    res.send('Create User');
}

const clientUsers = async (req, res) => {
    console.log(req.body);
    // POST
    // GET
    // const { typeUserGet } = req.query;

    // if(req.body !== undefined) {
    //     const { typeUser } = req.body;
    //     console.log(typeUser);
    // } else {
    //     res.send('Error');
    // }

    // UserModel.findClientUsers({ typeUser }, (err, data) => {
    //     if (err) {
    //         res.send('Error');
    //     } else {
    //         res.json(data);
    //     }
    // })
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