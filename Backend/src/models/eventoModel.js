import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Eventos = conn.define("eventos", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        // type: DataTypes.STRING,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vagas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingresso: {
        type: DataTypes.TEXT,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: "eventos",
}
);

export default Eventos;