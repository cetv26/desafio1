import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
//import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddClientComponent } from './add-client/add-client.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ListClientComponent } from './list-client/list-client.component';
import { KpiComponent } from './kpi/kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    KpiComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [/*AuthenticationService,*/ /*UserService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
