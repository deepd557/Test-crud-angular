import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './enums/path';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./component/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: Path.application,
    loadChildren: () =>
      import('./component/application/application.module').then(m => m.ApplicationModule)
  },
  // {
  //   path: Path.userlist,
  //   redirectTo: Path.userlist,
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
