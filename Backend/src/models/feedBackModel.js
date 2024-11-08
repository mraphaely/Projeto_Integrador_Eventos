import { DataTypes } from "sequelize";
import conn from "../config/connDB.js";

import Usuario from "./usuarioModel.js";

const Feedback = conn.define("feedbacks", {
   id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 3
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Usuario,
          key: "id"
        },
        onDelete: "CASCADE"
    },

});

Feedback.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default Feedback;