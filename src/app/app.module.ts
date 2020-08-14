import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/** Application routing */
import { AppRoutingModule } from './app-routing.module';

/** Application's root component */
import { AppComponent } from './app.component';

/** Domain modules */
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

/** UI widgets */
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AuthModule,
    MatSidenavModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
