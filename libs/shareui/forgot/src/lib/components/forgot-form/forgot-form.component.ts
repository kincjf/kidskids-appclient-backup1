import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'xui-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.scss']
})
export class ForgotFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  @Output() register = new EventEmitter();

  @Input() errorMessage: string | null;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Must be an vaild email.' }
    ]
  };

  forgotForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]),
        updateOn: 'blur'
      })
    });
  }

  ngOnInit() { }

  forgot() {
    this.submitted.emit();
  }

  goRegister() {
    this.register.emit();
  }
}
