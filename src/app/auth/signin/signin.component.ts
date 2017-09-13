import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html'
})
export class SigninComponent {
  constructor(private authService: AuthService){}

  signin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signin(email,password);
  }
}
