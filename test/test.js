// // map, filter and reduce - O/P Based Questions

// //Question 1 = Return only name of student in the given array.

// let students = [
//     {name:"piyuh", rollNumber:21, marks:80},
//     {name:"deepak", rollNumber:22, marks:20},
//     {name:"hari", rollNumber:23, marks:30},
//     {name:"pari", rollNumber:24, marks:82}
// ]

// const studentNames = students.map((names)=>{
//     return names.name.toUpperCase()
// })
// console.log(studentNames)

// //Question 2 = Return only details of those whose score is more than 60

// const studentDetails = students.filter((stu)=>{
//     return stu.marks > 60
// })

// // Question 3 = Return the details of students those marks are more than 60 and roll number is greater than 22

// const multipleFilterCondition = students.filter((stu)=>{
//     return stu.marks>60 && stu.rollNumber > 22
// })
// console.log(multipleFilterCondition)
// // Question 4 = Sum of marks of all students

// const reduceQuestion = students.reduce((acc, curr)=>{
//     return acc + curr.marks
// },0)
// console.log(reduceQuestion)

// //Question 5 = Return name of those whose score is more than 60
// const multipleChainingExample = students.filter((stu)=>{
//     return stu.marks > 60
// }).map((student)=> {return student.name})
// console.log(multipleChainingExample)


// // Question-6 Chaining map, filter, reduce
// // Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// const totalMarks = students
// .map((stu)=>{
//     if (stu.marks < 60){
//         stu.marks +=20
//     }
//     return stu;
// })
// .filter((stu) => stu.marks > 60)
// .reduce((acc, curr) => 
//     acc + curr.marks, 0)

// console.log(totalMarks)
particlesJS("particles-js", { "particles": { "number": { "value": 86, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#000000" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#5050f5" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

var Module = (function () {
    function PrivateMethod() {
        //do something
    }
    return {
        publicMethod: function () {
            // can call privateMethod()
        },
    };
})();