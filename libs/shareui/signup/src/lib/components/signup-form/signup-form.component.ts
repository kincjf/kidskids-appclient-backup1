import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidator, PhoneValidator } from '@ecom9/utils';

@Component({
  selector: 'xui-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.signupForm.disable();
    } else {
      this.signupForm.enable();
    }
  }

  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Fullname is required.' },
      { type: 'minlength', message: 'Fullname had atleast 3 chars.' },
      { type: 'maxlength', message: 'Fullname not exceed 150 chars.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Must be an vaild email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validPhoneByCountry', message: 'Invalid Phone.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password min length is 6.' },
      { type: 'pattern', message: 'Password must be strong.' },
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm Password is required.' },
      { type: 'samePassword', message: 'Confirm Password must be same as Password.' }
    ],
  };
  signupForm: FormGroup;

  @Input() errorMessage: string | null;

  matchingPasswordForm: FormGroup;
  @Output() submitted = new EventEmitter();
  @Output() signin = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
  ) {
    // loading company information
    this.matchingPasswordForm =
      this.formBuilder.group({
        'password': new FormControl('', {
          validators: Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})`))
          ]),
          updateOn: 'blur'
        }),
        'confirm_password': new FormControl('', {
          validators: Validators.compose([
            Validators.required
          ]), updateOn: 'blur'
        }),
      },
        {
          validator: PasswordValidator.samePassword.bind(this)
        });

    this.signupForm = formBuilder.group({
      'fullname': new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150)
        ]),
        updateOn: 'blur'
      }),
      'email': new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]),
      }),
      'phone': new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          // PhoneValidator.validPhoneByCountry('VN'),
        ]),
        updateOn: 'blur'
      }),
      matchingPasswordForm: this.matchingPasswordForm,
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.signupForm.valid) {
      this.submitted.emit(this.signupForm.value);
    }
  }

  goSignin() {
    this.signin.emit();
  }
}
