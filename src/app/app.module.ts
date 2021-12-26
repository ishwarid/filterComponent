import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
