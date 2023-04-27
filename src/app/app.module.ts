import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button'
import { MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {FormsModule} from '@angular/forms'
import {config} from './confiig'
import { FirebaseAppModule, initializeApp,provideFirebaseApp} from '@angular/fire/app'
import {FirestoreModule} from '@angular/fire/firestore'
import {TableComponent} from './table/table.component'



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    provideFirebaseApp(()=> initializeApp(config.firebase)),
   
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    FirestoreModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
