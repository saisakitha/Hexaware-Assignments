import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './component/player/player.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FindbynameComponent } from './findbyname/findbyname.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DashboardComponent,
    FindbynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
