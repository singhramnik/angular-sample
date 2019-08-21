import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      sendCatalog: true
    });   
  }

  populateTestData(){
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Smith',
      email: 'jack@smith.com',
      confirmEmail: 'jack@smith.com',
      phone: '0304040404',
      sendCatalog: false
    })
  }

  populateTestPatchValue(){
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Smith'
    })
  }

  save(){
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
