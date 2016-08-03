import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker';

@Component({
    selector: 'note-creator',
    directives: [ColorPicker],
    styleUrls: ['app/ui/note-creator.css'],
    templateUrl: 'app/ui/note-creator.html'
})

export class NoteCreator {
    @Output() createNote = new EventEmitter();
    colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white', 'lightblue'];
    newNote = {
        title: '',
        value: '',
        color: ''
    }
    fullForm: boolean = false;

    onCreateNote(){
        const { title, value, color } = this.newNote;

        if (title && value && color) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: '',
        }
    }

    toggle(value: boolean){
       this.fullForm = value; 
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }
}