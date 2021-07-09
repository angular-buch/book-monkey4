import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  // ⚠️ Unterschied zum Buch: Die Pipe kann `string | null` annehmen. Dieses Verhalten haben wir auch mit einem Unit-Test nachgewiesen.
  transform(value: string | null): string {
    // ⚠️ Unterschied zum Buch: Leeren String statt `null` returnen, sodass Return-Typ `string` erfüllt ist
    if (!value) { return ''; }
    return `${value.substr(0, 3)}-${value.substr(3)}`;
  }
}
