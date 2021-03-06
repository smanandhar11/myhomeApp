import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule,
  MatMenuModule, MatCheckboxModule, MatToolbarModule,
  MatFormFieldModule, MatExpansionModule, MatInputModule, MatGridListModule
} from '@angular/material';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
// angular-fire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {AuthService} from './services/auth.service';
import { PassComponent } from './comp/pass/pass.component';
import { DialogxComponent } from './comp/dialogx/dialogx.component';
import { WeatherComponent } from './comp/weather/weather.component';
import {FormsModule} from '@angular/forms';
import {PassDataService} from './services/pass-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassComponent,
    DialogxComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, PassDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
