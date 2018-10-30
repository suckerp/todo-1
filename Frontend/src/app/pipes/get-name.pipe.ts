import { Pipe, PipeTransform } from '@angular/core';
import { DbService, Todo } from '../services/db.service'

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {

  constructor(public db:DbService){
    
  }

  transform(value: number, args?: any): string {
    let person = this.db.persons.filter(x=>x.pid==value)[0]
    return `${person.firstName} ${person.lastName}`;
  }

}
