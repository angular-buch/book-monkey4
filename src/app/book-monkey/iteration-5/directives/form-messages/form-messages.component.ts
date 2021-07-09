import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'bm-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {

  @Input() control?: AbstractControl | null;
  @Input() controlName?: string;


  private allMessages: { [key: string]: { [key: string]: string } } = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden.'
    },
    isbn: {
      required: 'Es muss eine ISBN angegeben werden.',
      isbnFormat: 'Die ISBN muss aus 10 oder 13 Zeichen bestehen.',
      isbnExists: 'Die ISBN existiert bereits.'
    },
    published: {
      required: 'Es muss ein Erscheinungsdatum angegeben werden.'
    },
    authors: {
      atLeastOneAuthor: 'Es muss ein Autor angegeben werden.'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  errorsForControl(): string[] {
    type allMessagesKey = keyof FormMessagesComponent['allMessages'];
    const messages = this.allMessages[this.controlName as keyof allMessagesKey];

    if (
      !this.control ||
      !this.control.errors ||
      !messages ||
      !this.control.dirty
    ) { return []; }

    return Object.keys(this.control.errors)
      .map(err => messages[err]);
  }

}
