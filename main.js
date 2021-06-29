// Your code here.
function getFirstName(string){
  let answer = string.firstName;
  return answer
}

function getLastName(name){
  return name.lastName
}

function getFullName(user){
  return user.firstName + ' ' +user.lastName
}

function setFirstName(name, newName){
  name.firstName = newName;
}

function setAge(person, newAge){
  person.age = newAge
}

function giveBirthday(obj){
  if (obj.age<= 0 || !("age" in obj)){
    obj.age =1;
  }
 else {
  obj.age++
}
}
function marry(person1, person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

function divorce(person1, person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;

}



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry, 
  divorce,
}
