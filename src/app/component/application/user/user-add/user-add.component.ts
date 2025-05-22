
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Path } from 'src/app/enums/path';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
})
export class UserAddComponent {
  userForm!: FormGroup;
  isEditMode = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['']
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.userId = +id;
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(id: number): void {
    this.api.getUserById(id).subscribe(data => {
      this.userForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    if (this.isEditMode) {
      this.api.updateUser(this.userId, this.userForm.value).subscribe(() => {
        alert('User updated successfully');
    this.router.navigate(["/" + Path.userlist]);
      });
    } else {
      this.api.addUser(this.userForm.value).subscribe(() => {
        alert('User added successfully');
    this.router.navigate(["/" + Path.userlist]);
      });
    }
  }
}
