import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from './notes'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes,
        ...ROUTER_DIRECTIVES    
    ],
    templateUrl: 'app/containers/main.html'
})

export class Main{}