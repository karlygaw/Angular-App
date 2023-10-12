import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  firstname: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.firstname = '';
    this.user = null;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.firstname = params['firstname'];

      // Retrieve user data from localStorage
      const userListString = localStorage.getItem('userList');
      if (userListString) {
        const userList = JSON.parse(userListString);
        this.user = userList.find((user: any) => user.firstname === this.firstname);
      }
    });
  }

  // Жаңарту функциясы
  updateUser() {
    // Update the user data in localStorage
    const userListString = localStorage.getItem('userList');
    if (userListString) {
      let userList = JSON.parse(userListString);
      userList = userList.map((user: any) => {
        if (user.firstname === this.firstname) {
          return this.user;
        } else {
          return user;
        }
      });
      localStorage.setItem('userList', JSON.stringify(userList));
    }

    // Redirect to the "user-list" page after successful update
    this.router.navigate(['/user-list']);
  }
}
