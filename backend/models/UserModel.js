import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    tipe: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();