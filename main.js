const createStudent = (name, grade) => {
    const StudentObject = {
        "name": name,
        "grade": grade
    }
    
    return StudentObject
}

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}

let student = createStudent("George", 6)
console.log(student)

student= addMathGrade(student)
student = addHistoryGrade(student)
student = addScienceGrade(student)

console.log(student)