import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('f') signUpForm: NgForm;
  title = 'angular-forms';
  defaultQuestion  = 'pet';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    gender: '',
  }
  isSubmitted = false;
  
  suggestUserName() {
    const suggestedName = 'Superuser';

    //Setting Multiple Values in the form
    this.signUpForm.setValue({
      userData: {
        username: "Thea",
        email: 'test1234@mail.com',
        inputGenders: ''
      },
    });

  }


  onSubmit(){
    //console.log(this.signUpForm);
    this.isSubmitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.userData.inputGenders;

    this.signUpForm.reset();
  }

}
