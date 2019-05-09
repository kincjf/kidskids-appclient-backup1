import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Address, Country, CountryState } from '@ecom9/models';

@Component({
  selector: 'xui-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnInit, OnChanges {
  validation_messages = {
    'first_name': [
      { type: 'required', message: 'First Name is required.' },
      { type: 'minlength', message: 'First Name had atleast 2 chars.' },
      { type: 'maxlength', message: 'First Name not exceed 150 chars.' }
    ],
    'last_name': [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'minlength', message: 'Last Name had atleast 2 chars.' },
      { type: 'maxlength', message: 'Last Name not exceed 150 chars.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Must be an vaild email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validPhoneByCountry', message: 'Invalid Phone.' }
    ],
    'address_1': [
      { type: 'required', message: 'Address is required' },
    ],
    'city': [
      { type: 'required', message: 'City is required.' },
    ],
    'state': [
      { type: 'required', message: 'State is required.' },
    ],
    'country': [
      { type: 'required', message: 'Country is required.' },
    ],
  };
  addressForm: FormGroup;

  @Input() address: Address = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_1: '',
    address_2: '',
    city: '',
    country: 'US',
  };

  @Input() countries: Country[];
  states: CountryState[];

  @Output() save = new EventEmitter<Address>();
  constructor(private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      'id': new FormControl({ value: this.address.id }),
      'first_name': new FormControl(this.address.first_name, {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150)
        ]),
        updateOn: 'blur'
      }),
      'last_name': new FormControl(this.address.last_name, {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150)
        ]),
        updateOn: 'blur'
      }),
      'email': new FormControl(this.address.email, {
        validators: Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]),
        updateOn: 'blur'
      }),
      'phone': new FormControl(this.address.phone, {
        validators: Validators.compose([
          Validators.required,
        ]),
        updateOn: 'blur'
      }),
      'address_1': new FormControl(this.address.address_1, {
        validators: Validators.compose([
          Validators.required,
        ]),
        updateOn: 'blur'
      }),
      'address_2': new FormControl(this.address.address_2),
      'city': new FormControl(this.address.city, {
        validators: Validators.compose([
          Validators.required,
        ]),
        updateOn: 'blur'
      }),
      'state': new FormControl(this.address.state, {
        validators: Validators.compose([
          Validators.required,
        ]),
        updateOn: 'blur'
      }),
      'country': new FormControl(this.address.country),
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.address) {
      this.addressForm.patchValue({ ...this.address });

      if (this.address.country) {
        const country = this.countries.find(country => country.code === this.address.country);
        if (country) {
          this.states = country.states;
          if (this.states.length === 0) {
            this.addressForm.controls['state'].disable();
          }
        }
      }
    }
  }

  onChangeCountry(event) {
    const country = this.countries.find(country => country.code === event.detail.value);

    if (country) {
      this.states = country.states;
      if (this.states.length === 0) {
        this.addressForm.controls['state'].disable();
      }
    }
  }

  submit() {
    if (this.addressForm.valid) {
      this.save.emit(this.addressForm.value);
    }
  }
}
