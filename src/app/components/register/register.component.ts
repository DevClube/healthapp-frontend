import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',

})

export class RegisterComponent {
  user: User = { username: '', email:'' , password: '' };
  
  constructor(private userService: UserService) {}

  registerUser(user) : void {
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Handle success, e.g., show a success message or redirect to another page
        
      },
      (error) => {
        console.error('Error registering user:', error);
        // Handle error, e.g., show an error message
      },

    );
  }




}
