let user = { 
    name: 'Mauricio', 
    age: 34, 
    isProfessor: true, 
    courses: ['programming 1', 'programming 2', 'mathematical logic 1']
   };

let userJSON = JSON.stringify(user);
console.log(userJSON);
console.log(typeof userJSON);

let newUser = JSON.parse(userJSON);
console.log(newUser);
console.log(typeof newUser);

let schedule = `{
    "meetups": [
      { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
      { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
    ]
    }`;

let mySchedule = JSON.parse(schedule, (key, value) => {
    if (key === 'date') { return new Date(value); }
    return value;
});

console.log(mySchedule.meetups[1].date.getDate() + '/' + mySchedule.meetups[1].date.getMonth() + '/' + mySchedule.meetups[1].date.getFullYear());