import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLogin :boolean= true;
    isRegister:boolean = false;
    firstName:string = '';
    lastName:string = '';
    mobile:string = '';
    email:string = '';
    constructor(private router: Router) { }
    login() {
        this.router.navigate(['/home']);
       
    }
    backTolanding(){
        this.router.navigate(['/landing']);
      }
      ngOnInit(){
        console.log(this.customerRegisteredArray)
      }
      username: string ='';
      emailRegister: string ='';
      password: string ='';
      confirmPassword: string ='';
      showRegistration = false;
      customerRegisteredArray :any =[];
      register(registrationForm:any) {
        const formData = registrationForm.value;
        console.log('Registered Details:', formData);
        this.customerRegisteredArray.push(formData);
        console.log(this.customerRegisteredArray)
        this.username='';
        this.emailRegister='';
        this.password='';
        this.confirmPassword='';
        this.isRegister=false;
        this.isLogin=true;


    }
}
