// Dummy data dor Student and Campus tables

const { Campus } = require(".")

async function dummyData() {
    if(!await Student.findOne() && !await Campus.findOne()) {
        {await Student.bulkCreate(
            [
                {
                    studentID : "1111",
                    firstName : "Chip",
                    lastName : "Skylark",
                    email : "skylarkc@myshinyteeth.com",
                    gpa : "5"
                },
                {
                    studentID : "2222",
                    firstName : "TheCrimson",
                    lastName : "Chin",
                    email : "CrimsonChin@Hero.com",
                    gpa : "2"
                }
            ]
        )}
        {await Campus.bulkCreate(
            [
                {
                    campusID : "1000",
                    name : "Dimmsdale Community",
                    address : "1st street",
                    description : "Home of the Dimmsdale fairys"
                },
                {
                    campusID : "2000",
                    name : "Harvard",
                    address : "2 cool for school street",
                    description : "So this is a harvard bar... "
                }
            ]
        )}
    }
}