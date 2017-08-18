import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  // my_notes = [
  //   { id: 1, title: 'Nota 1', description: 'Descripción para la nota 1' },
  //   { id: 2, title: 'Nota 2', description: 'Descripción para la nota 2' },
  //   { id: 3, title: 'Nota 3', description: 'Descripción para la nota 3' },
  //   { id: 4, title: 'Nota 4', description: 'Descripción para la nota 4' },
  //   { id: 5, title: 'Nota 5', description: 'Descripción para la nota 5' }
  // ];
  my_notes: any;

  constructor(public afDB: AngularFireDatabase) {
    this.getNotes()
      .subscribe(
      notas => {
        this.my_notes = notas;
      }
      );
  }

  getNotes() {
    return this.afDB.list('/notas');
  }
  note = { id: null, title: null, description: null };

  show_form = false;
  editing = false;

  removeNote() {
    this.afDB.database.ref('notas/' + this.note.id).remove();
    this.note = { id: null, title: null, description: null }; // vaciar los campos
    this.show_form = false; // ocultar la nota
  }

  addNote() {
    this.show_form = true;
  }
  cancel() {
    this.show_form = false;
  }
  /*delete() {
    // hay que iterar por las notas hasta encontrarla
    var me = this;
    this.my_notes.forEach(function (el, i) {
      //cuando la encontremos vamos a usar el [i] el lugar donde está interando para eliminar esta nota del 
      // arreglo 
      if (el == me.note) {
        // i es el espacio en que nuestro elemento está presente y el segundo valor es cuantos elementos vamos a 
        //eliminar a partir de ahí en este caso 1
        me.my_notes.splice(i, 1);
      }
    });
    this.note = { id: null, title: null, description: null }; // vaciar los campos
    me.show_form = false; // ocultar la nota
  }*/




  createNote() {
    if (this.editing) {
      this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    } else {
      this.note.id = Date.now();
      this.afDB.database.ref('notas/' + this.note.id).set(this.note);
    }
    this.note = { id: null, title: null, description: null }; // vaciar los campos
    this.show_form = false; // ocultar la nota



    /*if (this.editing) {
      //alert('Editar')
      // se declara la variable me para no confundirla con this luego 
      var me = this;
      this.my_notes.forEach(function (el, i) {
        if (el.id === me.note.id) {
          // comparar si el id del elemento que estamos viendo actualmente es igual en me.note.id
          // posición actual que nos la da [i] = me.note
          // se itera cada elemento de my notes para ver cual es el que estamos tratando de evitar
          // y cuando lo encontremos asignarle el elemento que está siendo editado en ese lugar para que en
          // lugar de crear un nuevo elemento lo edite
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
    */
  }

  viewnote(note) {
    this.editing = true;
    this.note = note;
    this.show_form = true;
  }

}
