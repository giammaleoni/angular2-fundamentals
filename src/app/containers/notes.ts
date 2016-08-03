import { Component, OnDestroy } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NoteService } from '../services';
import { Store } from '../store';
import 'rxjs/Rx';

@Component({
  selector: 'notes-container',
  directives: [
    NoteCard,
    NoteCreator
  ],
    templateUrl: 'app/containers/notes.html',
    styleUrls: ['app/containers/notes.css']
})

export class Notes implements OnDestroy{
  notes = [];
  ngOnDestroy(){
    console.log("destroyed");
  }

  constructor(
    private noteService: NoteService,
    private store: Store
  ) {
    this.store.changes.pluck('notes')
    .subscribe((notes: any) => this.notes = notes);
    
    this.noteService.getNotes()
    .subscribe();
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
    .subscribe();
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
    .subscribe();

  }
}