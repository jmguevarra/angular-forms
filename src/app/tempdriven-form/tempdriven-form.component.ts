import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempdriven-form',
  templateUrl: './tempdriven-form.component.html',
  styleUrls: ['./tempdriven-form.component.css']
})
export class TempdrivenFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  @ViewChild('f') signUpForm: NgForm;
  title = 'angular-forms';
  defaultQuestion  = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    gender: '',
    question: '',
    hint: ''
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
      question: 'pet',
      questionAnswer: ''
    });

    //setting single value in the form field
    // this.signUpForm.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // });

  }

  //onSubmit(form: NgForm){
  //   console.log(form);
  // }
  //or using ViewChild
  onSubmit(){
    //console.log(this.signUpForm);
    this.isSubmitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.userData.inputGenders;
    this.user.question = this.signUpForm.value.question;
    this.user.hint = this.signUpForm.value.questionAnswer;

    this.signUpForm.reset();
  }
}
