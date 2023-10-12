import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})

export class UserListComponentComponent implements OnInit {
  users: any[] = [];
  ngOnInit(): void {
    // Localstorage дан list пользователей аламыз
    const userListJson = localStorage.getItem('userList');
    if (userListJson) {
      const userList = JSON.parse(userListJson);
      this.users = userList;
    } else {
      // localStorage да табылмаса
      console.error('User list not found in localStorage.');
    }
  }
  @Output() userRegistered = new EventEmitter<any>();

  
}






