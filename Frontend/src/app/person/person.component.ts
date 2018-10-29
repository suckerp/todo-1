import { Component, OnInit, Input } from '@angular/core';
import { DbService, Person } from '../services/db.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input("person") person: Person

  constructor(public db:DbService) { }

  ngOnInit() {
  }

  setStatus(tid:number, status:number){
    this.db.updateTodo(tid, status)
  }

}
