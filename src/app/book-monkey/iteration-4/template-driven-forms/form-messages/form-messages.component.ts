import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'bm-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {

  /** ⚠️ Unterschied zum Buch:
   * Propertys sind optional, sonst müssen sie direkt zugewiesen werden.
   * Der Typ von `control` muss auf `AbstractControl | null` gesetzt werden, denn das ist der
   * korrekte Rückgabetyp von `FormGroup.get()`
   */
  @Input() control?: AbstractControl | null;
  @Input() controlName?: string;

  // ⚠️ Unterschied zum Buch: Property mit korrekter Typisierung, siehe auch `this.errorsForControl()`
  private allMessages: { [key: string]: { [key: string]: string } } = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden.'
    },
    isbn: {
      required: 'Es muss eine ISBN angegeben werden.',
      minlength: 'Die ISBN muss mindestens 10 Zeichen haben.',
      maxlength: 'Die ISBN darf höchstens 13 Zeichen haben.'
    },
    published: {
      required: 'Es muss ein Erscheinungsdatum angegeben werden.'
    },
    authors: {
      required: 'Es muss ein Autor angegeben werden.'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  errorsForControl(): string[] {
    // ⚠️ Unterschied zum Buch: Verbesserte und korrekte Typisierung
    type allMessagesKey = keyof FormMessagesComponent['allMessages'];
    const messages = this.allMessages[this.controlName as keyof allMessagesKey];

    if (
      !this.control ||
      !this.control.errors ||
      !messages ||
      !this.control.dirty
    ) { return []; } // ⚠️ Unterschied zum Buch: Leeres Array statt `null`, sodass Return-Typ `string[]` erfüllt ist

    return Object.keys(this.control.errors)
      .map(err => messages[err]);
  }

}
