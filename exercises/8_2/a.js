const obj = require('./obj.js')

const addTurnoManha = (object, key, value) => {
  object[key] = value;
}
addTurnoManha(obj.lesson2, 'turno', 'manhã');

const listKeyInObject = (object) => {
  const keys = Object.keys(object);
  for(const key of keys) {
    console.log(key);
  }
}
listKeyInObject(obj.lesson2);

const sizeOfObject = (object) => {
  const size = Object.keys(object).length;
  return size;
}
console.log(sizeOfObject(obj.lesson2));

const listValueInObject = (object) => {
  const values = Object.values(object);
  for(const value of values){
    console.log(value);
  }
}
listValueInObject(obj.lesson2);

console.log(obj);

const countAllStudents = (object) => {
  let total = 0;
  for(const lessonKey in object){
    total+=object[lessonKey].numeroEstudantes;
  }
  return total;
}
console.log(countAllStudents(obj));

const getValueWithIndex = (object, index) => {
  const values = Object.values(object);
  return values[index];
}
console.log(getValueWithIndex(obj.lesson1, 0));

const isKeyValueExists = (object, key, value) => {
  const keyValue = [key, value];
  const objKeysValues = Object.entries(object);
  for(const kv of objKeysValues){
    if(JSON.stringify(kv)==JSON.stringify(keyValue)){
      return true;
    }
  }
  return false;
}
console.log(isKeyValueExists(obj.lesson3, 'turno', 'noite'));

const studentNumberInMathClass = (object) => {
  let total = 0;
  for(const lesson in object){
    if(object[lesson].materia==='Matemática'){
      total+=object[lesson].numeroEstudantes;
    }
  }
  return total;
}
console.log(studentNumberInMathClass(obj));

const createReport = (object, professor) => {
  const report = {
    professor: professor
  }
  let aulas = [];
  let estudantes = 0;
  for(const lesson in object){
    if(object[lesson].professor===professor){
      aulas.push(object[lesson].materia);
      estudantes += object[lesson].numeroEstudantes;
    }
  }
  report.aulas = aulas;
  report.estudantes = estudantes;

  return report;
}
console.log(createReport(obj, 'Maria Clara'));