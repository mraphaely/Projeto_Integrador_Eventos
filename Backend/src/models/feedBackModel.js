import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const feedBack = conn.define("feedback", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4
        }
    },
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    tableName: "feedback",
}
);

export default feedBack;