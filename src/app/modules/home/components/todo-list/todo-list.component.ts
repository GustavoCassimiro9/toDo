import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  public taskList: Array<TaskList> = [
    { task: "Testando task", checked: true },
    { task: "Testando task", checked: false },
    { task: "Testando task", checked: false }

  ];

  constructor() {

  }
  ngOnInit(): void {

  }
  
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("VocÊ deseja deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }

  }

  public addTask(){

  }
}
