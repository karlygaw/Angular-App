import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() userData = new EventEmitter<any>();
  repeatPass: string = 'none';
  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    gender: new FormControl("", [
      Validators.required
    ]),
    pwd: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(""),
  });


  registerSubmitted() {
    if (this.PWD.value == this.RPWD.value) {
      if (this.registerForm.valid) {
        this.repeatPass = 'none';

        // Create an object for the new user
        const newUser = {
          firstname: this.FirstName.value,
          lastname: this.LastName.value,
          email: this.Email.value,
          mobile: this.Mobile.value,
          gender: this.Gender.value,
          pwd: this.PWD.value,
        };

        // Retrieve the existing user list from localStorage or initialize an empty array
        const userListJson = localStorage.getItem('userList');
        const userList = userListJson ? JSON.parse(userListJson) : [];

        // Add the new user to the user list
        userList.push(newUser);

        // Save the updated user list back to localStorage
        localStorage.setItem('userList', JSON.stringify(userList));

        // Navigate to the "user-list" page after saving data
        this.router.navigate(['/user-list']);
      } else {
        // Handle form validation errors
      }
    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }

  get RPWD(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }
}
