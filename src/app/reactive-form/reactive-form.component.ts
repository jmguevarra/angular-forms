import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  blockedUsername = ['Chona', 'Gladys'];

  ngOnInit(): void {
    /**
     * @param of FormControl
     * - default value
     * - Validators
     * - Async Validators
     */
    this.signupForm = new FormGroup({
      'userData'  :   new FormGroup({
        'username'  :   new FormControl(null, [Validators.required, this.blockedUser.bind(this)]),
        'email'     :   new FormControl(null, [Validators.required, Validators.email], this.blockedEmails),
      }),
      'gender'    :   new FormControl('Male') ,
      'hobbies'   :   new FormArray([]),
    });

    // Event value Changes when typing 
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    // Event status Changes when typing
    // this.signupForm.statusChanges.subscribe((value)=>{
    //   console.log(value);
    // });

    
    // Setting Values in the form field
    // this.signupForm.setValue({
    //   'userData' : {
    //     'username' : 'Max',
    //     'email'    : 'max@test.com'
    //   },
    //   'gender'  : 'Male',
    //   'hobbies' : []
    // });
  
    // Setting Value in the form field
    // this.signupForm.patchValue({
    //   'userData' : {
    //     'username' : 'Max',
    //   }
    // });
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
    
    //default
    this.signupForm.patchValue({
      'gender' : "Male"
    });
  }

  /** Hobbies */
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  get hobbies(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  /** End Hobbies */

  blockedUser(control: FormControl): {[s: string]: boolean } {
    if(this.blockedUsername.indexOf(control.value) !== -1){ //didn't find it
      return {'blockedUsername': true};
    }
    return null;
  }

  blockedEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsBlocked': true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }


}
