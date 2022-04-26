import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  title = 'angular-forms';
  
 
  
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  
  //or using ViewChild
  onSubmit(){
    console.log(this.signUpForm);
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
