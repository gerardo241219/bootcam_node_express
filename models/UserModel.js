import { connection } from "../config/db.js";

const UserModel = {};

UserModel.findClientUsers = async (data, result) => {
    // Desestructuramos el objeto data
    const { typeUserGet } = data;

    // QUERY statement - (Select, Insert, Update, Delete)
    const query = `SELECT * FROM users WHERE type = ?`;

    // ASIGNACION DE VALORES Y DEVOLUCION DE RESULTADOS (QUERY - DATA - CALLBACK)
    connection.query(
        query,
        [typeUserGet],
        (err, res) => {
            if (err) {
                result(err, null)
            } else {
                result(null, res)
            }
        }
    )
}

UserModel.createUser = async (data, result) => {
    const { name, lastName, type } = data;

    const query = "INSERT INTO users (name, lastName, type) VALUES (?, ?, ?)";

    connection.query(
        query,
        [name, lastName, type],
        (err, res) => {
            if (err) {
                result(err, null)
            } else {
                result(null, res)
            }
        }
    )
}

export default UserModel;