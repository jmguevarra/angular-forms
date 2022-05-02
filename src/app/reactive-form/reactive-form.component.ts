import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    /**
     * @param of FormControl
     * - default value
     * - Validators
     * - Async
     */
    this.signupForm = new FormGroup({
      'username'  :   new FormControl(null),
      'email'     :   new FormControl(null),
      'gender'    :   new FormControl('Male') 
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
