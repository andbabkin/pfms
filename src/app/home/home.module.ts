import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { RouterModule } from '@angular/router';

/** Components */
import { HomeComponent } from './home.component';

/** UI widgets */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ]
})
export class HomeModule { }
