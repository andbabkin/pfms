import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { RouterModule } from '@angular/router';

/** Components */
import { LoginComponent } from './login/login.component';

/** UI widgets */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ]
})
export class AuthModule { }
