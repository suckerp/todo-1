import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../services/db.service'

@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(value: Todo[], person: number): Todo[] {
    return value.filter(x=>x.pid==person);
  }

}
