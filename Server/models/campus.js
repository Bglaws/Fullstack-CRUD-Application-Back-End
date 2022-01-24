const uniSearchDB = require('./database')

module.exports = (sequelize, Sequelize) => {
    const Campus = uniSearchDB.define('campus', {

        campusID : {
            type : Sequelize.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement: true
        },

        name : {
            type : Sequelize.STRING,
            allowNull : false,
            notEmpty: true,
            notNull : {
                msg : 'Please enter campus name'
            }
        },

        image : {
            type : Sequelize.STRING,
            defaultValue : "https://static.onecms.io/wp-content/uploads/sites/28/2016/12/22/notre-dame-university-COLLEGECAMP0421.jpg"
        },

        address : {
            type : Sequelize.STRING,
            allowNull : false, 
            notEmpty: {
                args: true,
            }
        },

        description : {
            type : Sequelize.STRING,
        }

    })

    module.exports(Campus);
}