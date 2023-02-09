const createStudent = (name, grade, history, math, science) => {
    const StudentObject = {
        "name": name,
        "grade": grade,
        "history": history,
        "math": math,
        "science": science
    }
    
    return StudentObject
}


let students = [
    ["George", 6, "b", "c", "a"],
    ["Amy", 7, "b", "c", "a"],
    ["Sally", 1, "b", "c", "a"],
    ["Peter", 3, "b", "c", "a"],
];

for (const student of students) {

    console.log(createStudent(...student))
}
