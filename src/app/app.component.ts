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
  note = { id: null, title: null, description: null };

  show_form = false;
  editing = false;
  addNote() {
    this.show_form = true;
  }
  cancel() {
    this.show_form = false;
  }
  createNote() {
    if (this.editing) {
      //alert('Editar')
      var me = this;
      this.my_notes.forEach(function (el, i) {
        if (el.id === me.note.id) {
          me.my_notes[i] = me.note;
        }
      });
      me.show_form = false;
    } else { // crear nueva
      //this.note = { id: null, title: null, description: null };
      this.note.id = Date.now();
      this.my_notes.push(this.note);
      this.show_form = false;
      this.note = { id: null, title: null, description: null };
    }

  }

  viewnote(note) {
    this.editing = true;
    this.note = note;
    this.show_form = true;
  }

}
