const Student = require('./student');
const Campus = require('./campus');
const uniSearchDB = require('./database')

Campus.hasMany(Student); // foreign key constructed from Campus model, appended to Student model for future reference
Student.belongsTo(Campus); // foreign key constructed from Campus model, appended to Student model for future reference

module.exports = {
  Student,
  Campus,
  uniSearchDB
}
