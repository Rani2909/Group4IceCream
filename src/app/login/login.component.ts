import {Component} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    firstName:string = '';
    lastName:string = '';
    mobile:string = '';
    email:string = '';

    login() {
        // Perform login using the username and password
    }
}
