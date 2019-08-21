import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      confirmEmail: new FormControl(),
      phone: new FormControl(),
      //notification: new FormControl(true),
      //rating: new FormControl(),
      sendCatalog: new FormControl(true)
      //addressType: new FormControl()      
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
