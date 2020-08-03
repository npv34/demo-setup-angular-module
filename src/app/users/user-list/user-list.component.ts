import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {HttpResult} from "../../httpresult";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((resp: HttpResult) => {
      if (resp.status == 'success') {
        console.log(resp.data)
        this.users = resp.data;
      }
    })
  }

  delete(id) {
    if (confirm('ban chac chan muon xoa?')) {
      this.userService.delete(id).subscribe((resp: HttpResult) => {
        if (resp.status == 'success') {
          console.log(resp.message);
          //this.router.navigate(['users'])
          this.getAll();
        }
      })
    }
  }

}
