import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Person = {
  pid: number,
  firstName: string,
  lastName: string
}

export type Todo = {
  tid: number,
  text: string,
  status: number,
  pid: number
}


@Injectable({
  providedIn: 'root'
})
export class DbService {

  public persons:Person[] = []
  public todos:Todo[] = []
  private urlServer = "http://localhost:3000/"

  constructor(private _http:HttpClient) { 
    this.getContent("person")
    this.getContent("todolist")
  }

  public testServer$(testMessage:string){
    return this._http.post(this.urlServer+"test",testMessage)
  }

  private getContent$(table:{table: string}){
    return this._http.post(this.urlServer+"select",table)
  }

  getContent(table:string){
    this.getContent$({table: table}).subscribe(
      (result:Person[]|Todo[])=>{
        if (table=="person") 
          this.persons=result as Person[]
        else
          this.todos=result as Todo[]},
      (error)=>{console.log(error)}
    )
  }
  
  private insertTodo$(todo: Todo){
    return this._http.post(this.urlServer+"insert",todo)
  }

  public insertTodo(aufgabe: string, pid: number){
    this.insertTodo$({tid: -1, text: aufgabe, status: 0, pid: pid}).subscribe(
      (result)=>{this.getContent("todolist"),
      (error)=>{console.log(error)}}
    )
  }

  private deleteTodo$(todo: Todo){
    return this._http.post(this.urlServer+"delete",todo)
  }

  public deleteTodo(tid: number){
    this.deleteTodo$({tid: tid, text: "", status: 0, pid: -1}).subscribe(
      (result)=>{this.getContent("todolist"),
      (error)=>{console.log(error)}}
    )
  }

  private updateTodo$(todo: Todo){
    return this._http.post(this.urlServer+"update",todo)
  }

  public updateTodo(tid: number, status: number){
    this.updateTodo$({tid: tid, text: "", status: status, pid: -1}).subscribe(
      (result)=>{this.getContent("todolist"),
      (error)=>{console.log(error)}}
    )
  }



}
