import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent,
                 LoginComponent,
                DashboardComponent],
  imports: [BrowserModule,
            
             CommonModule
             ],
  bootstrap: [AppComponent],
})
export class AppModule {}