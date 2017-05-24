import EventEmitter from "eventemitter3";

class Backend extends EventEmitter{
  constructor() {
    super();
    this.completed = [
      {
        name:'Call dhobi for salary.',
        created:new Date(2017,4,24,6,0),
        due:new Date(2017,4,25,7,0),

      }
    ]
    this.todo = [

      {
        name:'Finish user auth.',
        created:new Date(2017,4,24,5,0),
        due:new Date(2017,4,25,10,0),

      },
      {
        name:'Submit project.',
        created:new Date(2017,4,24,10,6),
        due:new Date(2017,4,25,8,30),

      }
    ]
  }
  getAllToDo(){
    return this.todo;
  }
  getCompleted(){
    return this.completed;
  }
  deleteTask(task){
    var i = this.todo.indexOf(task);
    this.todo.splice(i,1);
    this.emit("update",this.todo);
  }
  add(task){
    this.todo.push(task);
    this.emit("update",this.todo);
  }
  done(task){
    this.completed.push(task);
    this.deleteTask(task);
    this.emit("update",this.todo);
    this.emit("change",this.completed);
  }
  restore(task){
    var i = this.completed.indexOf(task);
    this.completed.splice(i,1);
    this.todo.push(task);
    this.emit("update",this.todo);
    this.emit("change",this.completed);
  }
  deleteFromCompleted(task){
    var i = this.completed.indexOf(task);
    this.completed.splice(i,1);
    this.emit("change",this.completed);
  }
}

export default Backend;
