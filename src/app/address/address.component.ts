import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() form: FormGroup;
  parentformAcessChild: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.parentformAcessChild = this.rootFormGroup.control;
    this.form.addControl('zip', new FormControl('', Validators.required));
    this.form.addControl('street', new FormControl('', Validators.required));
    this.form.addControl('city', new FormControl('', Validators.required));
    console.log('Home FormGroup is ', this.parentformAcessChild);
  }
}
