import { DataTypes } from "sequelize";
import conn from "../config/connDB.js";

import Usuario from "./usuarioModel.js";

const Inscricao = conn.define("inscricoes", {
   id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 5
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

Inscricao.belongsTo(Usuario, { foreignKey: "usuario_id" });

export default Inscricao;