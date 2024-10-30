import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Inscricao = conn.define("inscricoes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    nome_participante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    evento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qnt_ingresso: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "inscricoes",
}
);

export default Inscricao;