let user = { 
    name: 'Mauricio', 
    age: 33, 
    isProfessor: true, 
    courses: ['programming 1', 'programming 2', 'mathematical logic 1']
   };

console.log(typeof user);

let userJSON = JSON.stringify(user);
console.log(userJSON);
console.log(typeof userJSON);

let objectUser = JSON.parse(userJSON);
console.log(objectUser);
console.log(typeof objectUser);

let schedule = `{
    "meetups": [
      { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
      { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
    ]
    }`;

let objectSchedule = JSON.parse(schedule, (key, value) => {
    if (key === "date") return new Date(value);
    return value;
});
console.log(`${objectSchedule.meetups[0].date.getDate()}/${objectSchedule.meetups[0].date.getMonth()+1}/${objectSchedule.meetups[0].date.getFullYear()} - ${objectSchedule.meetups[0].date.getTime()}`);
