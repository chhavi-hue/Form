import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public SaveEmployee(formdata: { Name: string; Email: string; Message: string }) {
    console.log("Full Name : " + formdata.Name);
    console.log("Email Id : " + formdata.Email);
    console.log("Message : " + formdata.Message);
  }
}