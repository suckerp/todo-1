import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { DbService } from '../services/db.service';
import * as rx from 'rxjs'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
  public http_antwort$
  @ViewChild('testMessage') testMessage: ElementRef<HTMLInputElement>
  public persons

  constructor(public db:DbService) { 
    
  }

  ngOnInit() {
    this.http_antwort$ = rx.Observable.create((observer)=>{
      observer.next("noch keine Anfrage versendet")
      this.testMessage.nativeElement.addEventListener("change",(event)=>{
        observer.next((event.target as HTMLInputElement).value)
      })
    })
    this.db.getContent("person")
  }

}
