import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpResult} from "../../httpresult";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    console.log(this.id);
    this.editUserForm = this.fb.group({
      name: [''],
    })
    this.findById();
  }

  findById() {
    this.userService.findById(this.id).subscribe((resp: HttpResult) => {
      if (resp.status == 'success') {
        console.log(resp.data)
        this.editUserForm.patchValue(resp.data)
      }
    })
  }

  update() {
    let data = this.editUserForm.value;
    this.userService.update(data, this.id).subscribe((resp: HttpResult) => {
      if (resp.status == 'success') {
        this.router.navigate(['users'])
      }
    })
  }

}
