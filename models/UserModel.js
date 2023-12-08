import { connection } from "../config/db.js";

const UserModel = {};

UserModel.findClientUsers = async (data, result) => {
    // Desestructuramos el objeto data
    const { typeUser } = data;

    // QUERY statement - (Select, Insert, Update, Delete)
    const query = `SELECT * FROM users WHERE type = ?`;

    // ASIGNACION DE VALORES Y DEVOLUCION DE RESULTADOS (QUERY - DATA - CALLBACK)
    connection.query(
        query,
        [typeUser],
        (err, res) => {
            if(err) {
                result(err, null)
            } else {
                result(null, res)
            }
        }
    )
}

export default UserModel;