import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  my_notes = [
    { id: 1, title: 'Nota 1', description: 'Descripción para la nota 1' },
    { id: 2, title: 'Nota 2', description: 'Descripción para la nota 2' },
    { id: 3, title: 'Nota 3', description: 'Descripción para la nota 3' },
    { id: 4, title: 'Nota 4', description: 'Descripción para la nota 4' },
    { id: 5, title: 'Nota 5', description: 'Descripción para la nota 5' }
  ];
  note = {};

  show_form = false;
  addNote() {
    this.show_form = true;
  }
  cancel() {
    this.show_form = false;
  }

}
