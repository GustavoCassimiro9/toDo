import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emmitItemTaskList = new EventEmitter();
  public addItemTaskList: string = ""

  constructor() {

  }

  public submitItemTaskList() {
    if (this.addItemTaskList) {
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""
    }
  }
}
