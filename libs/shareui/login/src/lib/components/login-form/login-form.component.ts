import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginPayload } from '@ecom9/models';

@Component({
  selector: 'xui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.signinForm.disable();
    } else {
      this.signinForm.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<LoginPayload>();
  @Output() register = new EventEmitter();
  @Output() forgotPassword = new EventEmitter();

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Must be an vaild email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ],
  };

  signinForm: FormGroup;
  passwordType: string = 'password';
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.signinForm = this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]),
        updateOn: 'blur'
      }),
      password: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ]),
        updateOn: 'blur'
      })
    });
  }

  ngOnInit() { }

  signin() {
    if (this.signinForm.valid) {
      this.submitted.emit(this.signinForm.value);
    }
  }

  goRegister() {
    this.register.emit();
  }

  forgot() {
    this.forgotPassword.emit();
  }

  toggle() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
