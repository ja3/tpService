import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeUsersService } from './fake-users-service';
import { UserService } from './user.service';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide : UserService , useClass:FakeUsersService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
