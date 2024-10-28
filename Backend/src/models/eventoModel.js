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
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uploadimg: {
        type: DataTypes.STRING,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vagas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingresso: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: "eventos",
}
);

export default Eventos;