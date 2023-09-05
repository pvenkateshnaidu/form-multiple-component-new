import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-office-addr',
  templateUrl: './office-addr.component.html',
  styleUrls: ['./office-addr.component.css'],
  providers: [FormGroupDirective],
})
export class OfficeAddrComponent implements OnInit {
  @Input() form: FormGroup;
  parentformAcessOfficeChild: FormGroup = new FormGroup({});
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.parentformAcessOfficeChild = this.rootFormGroup.control;
    this.form.addControl('street', new FormControl('', Validators.required));
    this.form.addControl('city', new FormControl('', Validators.required));
  }
}
