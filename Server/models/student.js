const uniSearchDB = require('./database')

module.exports = (sequelize, Sequelize) => {
    const Student = uniSearchDB.define('student', {

        studentID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: {
                args: true,
                msg: 'Please enter a first name'
            }
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: {
                args: true,
                msg: 'Please enter a last name'
            }
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: {
                args: true,
                msg: 'Please enter an email'
            },
            isEmail: {
                args: true,
                msg: 'Invalid format, please enter valid email'
            }
        },

        imageURL: {
            type: Sequelize.STRING,
            defaultValue: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        },

        gpa: {
            isFloat: true,
            min: {
                args: 0.0,
                msg: 'GPA must be a minimum of 0.0'
            },
            max: {
                args: 4.0,
                msg: 'GPA must be a maximum of 4.0'
            }
        }
    })
}

