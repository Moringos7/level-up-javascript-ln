// Write your code here
class ClassRoom{
  constructor(hasTeachingAssistant, list){
    this.hasTeachingAssistant = hasTeachingAssistant;
    this.list = list;
  }
   
}

function getStudents(classRoom){
  let studentList = classRoom.list.slice(1);
  if(classRoom.hasTeachingAssistant){
    studentList.shift();
  }
  return studentList;
}
const list = ["Oliver","Ren","Amy","Ahmed","Marcos"];
const classRoom = new ClassRoom(false,list);
console.log(getStudents(classRoom));
console.log(classRoom.list);
