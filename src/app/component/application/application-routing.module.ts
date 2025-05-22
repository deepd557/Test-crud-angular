import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'src/app/enums/path';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },

  {
    path: Path.userlist,
    component: UserComponent
  },
  {
    path: Path.userAdd,
    component: UserAddComponent
  },
  {
    path: `${Path.userAdd}/:id`,
    component: UserAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
