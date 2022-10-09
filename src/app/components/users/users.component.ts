import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.userService.getUsers().subscribe((r) => (this.users = r['value']));
  }
}
