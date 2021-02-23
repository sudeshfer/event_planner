import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }

  remember = false;

  constructor(
    private auth: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.validate()) {
      alert('Please enter all details!');
      return;
    }

    this.auth.doPost('/user/login', this.user)
    .then(result => {
      console.log(result);

      if (result.error) {
        alert(result.error.data);
        return;
      }

      alert('Lomgin Sumccemss');
    })
    .catch(error => {
      alert(error.data);
      console.log(error)
    })
  }

  validate() {
    if (this.user.email == '' || this.user.password == '') {
      return false;
    }

    return true;
  }

}
