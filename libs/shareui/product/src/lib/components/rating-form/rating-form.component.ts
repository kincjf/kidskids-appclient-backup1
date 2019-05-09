import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from '@ecom9/models';

@Component({
  selector: 'xui-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss']
})
export class RatingFormComponent implements OnInit, OnChanges {
  @Input() customer: Customer = {
    username: '',
    email: '',
  };

  @Output() review = new EventEmitter<any>();

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
    'comment': [
      { type: 'required', message: 'Comment is required.' },
      { type: 'minlength', message: 'Comment had atleast 10 chars.' },
    ],
    'rating': [
      { type: 'required', message: 'Rating is required.' },
    ],
  };
  reviewForm: FormGroup;

  rates = [1, 2, 3, 4, 5];
  currentRating = 0;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.reviewForm = formBuilder.group({
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
      'comment': new FormControl('', {
        validators: Validators.compose([
          Validators.required,
          Validators.minLength(10),
        ]),
        updateOn: 'blur'
      }),
      'rating': new FormControl('', {
        validators: Validators.compose([
          Validators.required,
        ])
      }),
    });
  }

  rating(rate) {
    this.currentRating = rate;
    this.reviewForm.controls['rating'].setValue(this.currentRating);
  }

  ngOnChanges() {
    if (this.customer) {
      if (this.customer.first_name && this.customer.last_name) {
        this.reviewForm.controls['fullname'].setValue(`${this.customer.first_name} ${this.customer.last_name}`);
      } else {
        this.reviewForm.controls['fullname'].setValue(this.customer.username);
      }
      this.reviewForm.controls['email'].setValue(`${this.customer.email}`);
    }
  }

  ngOnInit() {

  }

  submit() {
    if (this.reviewForm.valid) {
      this.review.emit(this.reviewForm.value);
      console.log(this.reviewForm.value);
    }
  }

}
