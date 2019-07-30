import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { CarListComponent } from './car-list/car-list.component'
import { CarEditComponent } from './car-edit/car-edit.component'

import { OwnerListComponent } from './owner-list/owner-list.component'
import { OwnerEditComponent } from './owner-edit/owner-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    OwnerListComponent,
    OwnerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
