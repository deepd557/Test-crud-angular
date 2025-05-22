import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from 'src/app/enums/path';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  users: any[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.api.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  // editUser(id: number): void {
  //   this.router.navigate([`/${Path.userAdd}/${id}`]);
  // }
  // ✅ Correct way to navigate to user edit page
  editUser(id: number): void {
    this.router.navigate([`/${Path.userAdd}`, id]);
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure to delete this user?')) {
      this.api.deleteUser(id).subscribe(() => {
        alert('User deleted');
        this.loadUsers();
      });
    }
  }
  userAdd() {
    this.router.navigate(["/" + Path.userAdd]);
  }
}
