import { 
    Component, 
    Input, 
    Output, 
    EventEmitter 
} from '@angular/core';

@Component({
    selector: 'note-card',
    //inputs: ['note'],
    templateUrl: 'app/ui/note-card.html',
    styleUrls: ['app/ui/note-card.css']
})

export class NoteCard {
    @Input() note = {};
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    toggle(){
        this.showCheck = !this.showCheck;
    }

    onChecked(){
        //console.log('clicked');
        this.checked.next(this.note);
    }
}