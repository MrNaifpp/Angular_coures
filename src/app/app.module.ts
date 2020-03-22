import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { MemberComponent } from './member/member.component';
import {HttpClientModule} from '@angular/common/http';
import { TestgetComponent } from './testget/testget.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { RegisterComponent } from './register/register.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ReminderComponent } from './reminder/reminder.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { SetReminderComponent } from './set-reminder/set-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    TestgetComponent,
    LoadingPageComponent,
    RegisterComponent,
    ItemListComponent,
    ItemInfoComponent,
    ReminderComponent,
    MyItemsComponent,
    SetReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
