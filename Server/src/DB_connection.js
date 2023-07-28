require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const CharacterModel = require('./models/Character');
const UserModel = require('./models/User'); 

// EJERCICIO 03// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!// Recuerda pasarle la información de tu archivo '.env'.
const sequelize = new Sequelize( 
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
   );

// EJERCICIO 05// Debajo de este comentario puedes ejecutar la función de los modelos.
CharacterModel(sequelize);
UserModel(sequelize)

// Ejercicio 06// ¡Relaciona tus modelos aquí abajo!
const { User, Character } = sequelize.models; //esta linea trae los modelos de sequalize.
User.belongsToMany(Character, {through: 'user_character'});//los realacionamos de 
Character.belongsToMany(User, {through: 'user_character'}) //muchos a muchos(belongsToMany)
//se relacionan (through) en una tabla intermedia, por convencion lleva el nombre de ambos.
//la table intermedia la crea sequalize.
module.exports = {
   User,
   Character,
   conn: sequelize, //exporta la instancia
};
