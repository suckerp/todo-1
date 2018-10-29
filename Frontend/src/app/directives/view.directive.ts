import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { DbService, Todo } from '../services/db.service'

@Directive({
  selector: '[buttonview]'
})
export class ViewDirective {

  @Input() buttonview:number
  btnInnerText:string
  @Output('setStatus') setStatus:EventEmitter<number>

  constructor(private elemRef: ElementRef, private db:DbService) { 
    this.setStatus = new EventEmitter()
  }

  ngOnInit(){
    console.log(this.buttonview)
    this.btnInnerText = this.buttonview==0?"offen":"erledigt";
    let btn = document.createElement("button") as HTMLButtonElement
    btn.innerText = this.btnInnerText;
    btn.addEventListener("click",(event)=>{
      this.buttonview = this.buttonview==0?1:0
      btn.innerText = this.buttonview==0?"offen":"erledigt";
      this.setStatus.emit(this.buttonview)
      console.log(this.buttonview)
    }
    );
    (this.elemRef.nativeElement as HTMLElement).appendChild(btn)
  }







}
