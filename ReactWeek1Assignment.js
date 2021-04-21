
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email; 
        this.community = community;
    }
}
​
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        const emailAlreadyRegistered = this.students.filter(studentCheck => studentCheck.email === student.email)
        if (emailAlreadyRegistered.length > 0) {
            console.log(`${student.email} is already registered`)
        } else {
            this.students.push(student)
            console.log(`Registering ${student.email} to the Bootcamp ${this.name}.`)
            return this.students;
        }
    }
}
​
const student1 = new Student("Devon", "dbatemon33@gmail.com", "Bakersfield");
const student2 = new Student("Matt", "reachwillfall1@gmail.com", "Pittsburgh");
console.log(`Student1: ${student1.name}, ${student1.email}, ${student1.community}, Student2: ${student2.name}`);
​
const React = new Bootcamp("React", "Rookie")
console.log(React);
React.registerStudent(student1);
console.log(React);
React.registerStudent(student2);