import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { return null; }
    return `${value.substr(0, 3)}-${value.substr(3)}`;
  }
}
