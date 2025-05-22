import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserComponent } from './user/user.component';
 

@NgModule({
  declarations: [UserComponent, UserAddComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ApplicationModule { }
