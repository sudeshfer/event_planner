import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-supplier-registration',
  templateUrl: './supplier-registration.component.html',
  styleUrls: ['./supplier-registration.component.css']
})
export class SupplierRegistrationComponent implements OnInit {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    nicno: '',
    img: File = null,
    phone: '',
    sup_type: '',
    amount: '',
    address: '',
    password: '',
  }
  constructor(
    private auth: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.user.img = files.item(0);
  }

  register() {
    console.log(this.user)
    if (!this.validate()) {
      alert('Invalid data, please enter all fields.');
      return;
    }

    const formData: FormData = new FormData();

    for (let key of Object.keys(this.user)) {
      formData.append(key, this.user[key]);
    }

    this.auth.doPost('/user/create', formData)
    .then(result => {
      if (result.error) {
        alert(result.error.data);
        return;
      }

      alert('Regimstramtion sumccemss!');
      window.location.reload();
    })
    .catch(error => {
      alert('Something went wrong, please try again later!');
      console.log(error)
    });

    console.log(formData);
  }

  validate() {
    if (this.user.first_name == '' || this.user.last_name == '' || this.user.email == '' || this.user.nicno == '' || this.user.phone == '' || this.user.sup_type == '' || this.user.amount == '' || this.user.address == '' || this.user.password == '') {
      return false;
    }

    return true;
  }

}
