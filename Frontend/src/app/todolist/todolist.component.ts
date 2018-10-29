import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public db:DbService) { }

  ngOnInit() {
  }

  insertTodoEvent(aufgabe:string, person:number){
    this.db.insertTodo(aufgabe, person)
  }

  deleteTodoEvent(person:number){
    this.db.deleteTodo(person)
  }

}
