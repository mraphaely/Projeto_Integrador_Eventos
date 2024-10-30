import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Palestrante = conn.define("palestrantes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    evento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expertise: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "palestrantes",
}
);

export default Palestrante;