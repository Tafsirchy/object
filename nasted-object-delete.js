const college = {
    name: 'HTUC',
    class: ['11','12'],
    events: ['science','nabin baran', '21st february', 'bijoy dibas'],
    unique: {
        color: 'white',
        result: {
            gpa: 5.00,
            merit: 'top',
        }
       
    }
}

// console.log(college);
// console.log(college.name);
// console.log(college.unique.color);
// console.log(college.unique.result);
// console.log(college.unique.result.gpa);

college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);

college.events[2] = '26 march';
console.log(college.events[2]);


console.log(college);
delete college.class;
console.log(college);

