import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(
    public _fb: FormBuilder,
    private formService: FormService) { }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      Name: new FormControl("", [Validators.required,
      Validators.minLength(3), Validators.maxLength(24), Validators.pattern('[a-zA-Z ]*')]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      Message: new FormControl("", Validators.maxLength(255))
    });
  }

  get fval() {
    return this.userForm.controls;
  }

  SaveEmployee(value: any) {
    this.formService.SaveEmployee(value);
    this.userForm.reset();
  }
}