var mongoose = require('mongoose');
var Schema = mongoose.Schema();
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectionString = "mongodb+srv://patchaya:Pyst@898989@cluster0.t6dbz.mongodb.net/HelloMongodb?retryWrites=true&w=majority";
mongoose.connect(connectionString, config)
    .then(() => console.log('Connected mongo db')

    )
    .catch(err => console.log('Cannot connect mongo db' + err))

const EmployeeSchema = new mongoose.Schema({
    id: String,
    name: String,
    gender: String,
    age: Number,
    depId: String
});

const Employee = mongoose.model('employees', EmployeeSchema);

const qurey = { gender: 'F' };
async function getEmployee(condition) {
    const employee = await Employee.find(condition)
    console.log(employee)
}

getEmployee(qurey)





// async function createEmployee() {
//     const emp = Employee({
//         id: 'E05',
//         name: 'Kanda',
//         gender: 'F',
//         age: 23,
//         depId: 'D01'
//     });

//     const data = await emp.save()
//     console.log(data)

// }

// createEmployee()





// // get data from collection Student : table name
// const Student = new mongoose.model('Student', studentSchema);

// // // //insert data

// // async function createStudent() {
// //     const student = Student({
// //         id: '000003',
// //         name: 'patchaya',
// //         gender: 'F'
// //     });


// //     const data = await student.save()
// //     console.log(data);
// // }

// // createStudent()


// async function getStudents() { // query data
//     const student = await Student.find()
//     console.log(student)
// }

// getStudents()

// // const departmentSchema = new mongoose.Schema({
// //     id: String,
// //     name: String
// // });

// // //insert data
// // const Department = new mongoose.model('Department', departmentSchema);

// // async function createDepart() {
// //     const depart = Department({
// //         id: '000001d',
// //         name: 'departNo1'
// //     });

// //     const data = await depart.save()
// //     console.log(data);
// // }

// // createDepart()

// //update data
// // async function update_data() {
// //     Student.updateOne({ name: "patchaya" }, { gender: "MMDA" }, function(
// //         err,
// //         result
// //     ) {
// //         if (err) {
// //             console.log('error')
// //         } else {
// //             console.log(result)
// //         }
// //     });
// // }

// // update_data()

// //delete data 
// async function deleteOne() {
//     Student.deleteOne({ name: 'patchaya' }, function(err) {
//         if (err) console.log(err);
//         console.log("Successful deletion");
//     });
// }

// deleteOne()