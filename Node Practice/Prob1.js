//Q.1} Write a function to find all students who are enrolled in the "Math" course. 


const students = [
    { id: 1, name: "Farzan", courses: ["Math", "Physics", "English"] },
    { id: 2, name: "Piyush", courses: ["Chemistry", "Biology", "History"] },
    { id: 3, name: "Ravi", courses: ["Computer", "Physics", "Math"] },
]

function findCourse(courseName) {
    return students.filter(student => student.courses.includes(courseName))
        .map(student => ({ id: student.id, name: student.name }));
}

const mathStudents = findCourse("Math");
console.log("Students enrolled in Math course:");
mathStudents.forEach(student => {
    console.log(`${student.name} (ID: ${student.id})`);
});

//Q.2} Implement a function to calculate the total number of courses across all students

function calcTotalCourses() {

    let totalCourses = 0;
    students.forEach(student => {
        totalCourses += student.courses.length;
    });
    return totalCourses;
}

const totalCourses = calcTotalCourses();
console.log("Total no. of courses across all students:", totalCourses);

//Q.3} Create a function to find the student with the most courses. 

function studentMostCourses() {
    let maxCourses = 0;
    let withMostCourses = null;

    students.forEach(student => {
        if (student.courses.length > maxCourses) {
            maxCourses = student.courses.length;
            withMostCourses = student;
        }
    });

    return withMostCourses;

}

const withMostCourses = studentMostCourses();
console.log("Student with the most courses:", withMostCourses.name, "(ID:", withMostCourses.id + ")");
