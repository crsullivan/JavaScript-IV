
class Person {
    constructor(atts){
        this.newName = atts.name;
        this.newAge = atts.age;
        this.newLocation = atts.location;
    }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}.` 
    }
}

class Instructor extends Person{
    constructor(instructorAtts){
        super(instructorAtts);
        this.newSpecialty = instructorAtts.specialty;
        this.newFavLanguage = instructorAtts.favLanguage;
        this.newCatchPhrase = instructorAtts.catchPhrase;
    }
   demo(subject){
    return `Today we are learning about ${subject}.`
   } 
   grade([student], subject){
    return `${student.newName} receives a perfect score on ${subject}.`
   }
}


class ProjectManager extends Instructor{
    constructor(pmAtts){
        super(pmAtts);
        this.newGradClassName = pmAtts.gradClassName;
        this.newFavInstructor = pmAtts.favInstructor;
    }
    standUp(channel){
        return `${this.newName} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(student, subject){
        return `${this.newName} debugs ${student.newName}'s code on ${subject}`
    }
}


class Student extends Person{
    constructor(stdntAtts){
        super(stdntAtts);
        this.newPreviousBackground = stdntAtts.previousBackground;
        this.newClassName = stdntAtts.className;
        this.newFavSubjects = stdntAtts.favSubjects;
    }
    listsSubjects(){
        return this.newFavSubjects
        }
        
     
    
    prAssignment(subject){
        return `${this.newMame} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.newName} has begun sprint challenge on ${subject}.`
    }
}
const tom = new Instructor({
    name: 'Tom',
    location: 'WB Studios',
    age: 12,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Meow`
  });

  const jerry = new Instructor({
    name: 'Jerry',
    location: 'WB Studios',
    age: 5,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Ahhh oh no a cat`
  });

  const tina = new ProjectManager({
    name: 'Tina',
    location: 'Mexico-City',
    age: 30,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Oreo binge!!!!`,
    gradClassName: "WEB 17",
    favInstructor: 'Jerry'
  });

  const hans = new ProjectManager({
    name: 'Hans',
    location: 'Germany',
    age: 32,
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `I only code while listening to Crab Rave`,
    gradClassName: 'DS 2',
    favInstructor: 'Tom'
  });

  const barbara = new Student({
    name: 'Barbara',
    location: 'Iowa',
    age: 39,
    previousBackground: 'Potato Farmer',
    className: 'WEB 22',
    favSubjects: ['Responsive Design', 'Flexbox', 'HOF']
  });

  const samantha = new Student({
    name: 'Samantha',
    location: 'Australia',
    age: 20,
    previousBackground: 'Amateur Kangaroo wrangler',
    className: 'UX 12',
    favSubjects: ['Aesthetics', 'Ease of use', 'Mental ergonomics']
  });

console.log(tom.newAge);
console.log(barbara.newPreviousBackground);
console.log(barbara.sprintChallenge('JavaScript'));
console.log(tom.speak());
console.log(samantha.listsSubjects());
console.log(hans.debugsCode(samantha, 'JavaScript'));



/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
