const createUser = (req, res) => {
    res.send('Create User');
}

const readUser = (req, res) => {
    res.send('Read User');
}

const updateUser = (req, res) => {
    res.send('Update User');
}

const deleteUser = (req, res) => {
    res.send('Delete User');
}

export {
    createUser,
    readUser,
    updateUser,
    deleteUser
}


// export default UserController;