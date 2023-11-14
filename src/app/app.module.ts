import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { DrinksComponent } from './drinks/drinks.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavoursComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DrinksComponent,
    SpecialMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }