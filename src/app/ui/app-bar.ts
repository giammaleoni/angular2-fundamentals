import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../services';

@Component({
    selector: 'app-bar',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    styleUrls: ['app/ui/app-bar.css'],
    templateUrl: 'app/ui/app-bar.html'
})

export class AppBar {
    constructor(private authService: AuthService){}

    signout(){
        this.authService.signout();
    }
}