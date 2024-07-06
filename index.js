// Data Structure - Array
const students = ["Bikash", "Anish", "Hello", "Manish", "Ram"];

// Algorithm to find the specific user :
const getTheStudent = (studentList, studentName) =>
  studentList.filter((eachStudent) => eachStudent === studentName);

console.log(`Found ${getTheStudent(students, "Bikash")}`);
