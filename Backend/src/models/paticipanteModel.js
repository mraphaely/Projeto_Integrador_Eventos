import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Participante = conn.define("participantes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    repetir_senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "participantes",
}
);

export default Participante;