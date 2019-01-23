import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from './validators/phone-validator';
import { emailValidator } from './validators/email-validator';
import { nospaceValidator } from './validators/no-white-space';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private messageService: MessageService) { this.contactForm = this.createFormGroup(); }

  formValid = false;
  myObj: any = '';
  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      fullname: new FormControl('', [Validators.required, nospaceValidator]),
      email: new FormControl('', [Validators.required, Validators.email, emailValidator]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
      message: new FormControl('')
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    this.formValid = true;
    if (this.contactForm.invalid) {
      return;
    }
    // console.log('email=' + this.email.value);
    // console.log('mobile=' + this.mobile.value);
    // console.log('fullname=' + this.fullname.value);
    // console.log('message=' + this.message.value);

    this.myObj = { 'email': this.email.value, 'mobile': this.mobile.value, 'fullname': this.fullname.value, 'message': this.message.value };
    this.messageService.setNewUserInfo({ Message: this.myObj } );
    this.revert();
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }
  get fullname() {
    return this.contactForm.get('fullname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
}