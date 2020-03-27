import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componentes/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PreguntaComponent } from './popUp/pregunta/pregunta.component';
import { NotificacionComponent } from './popUp/notificacion/notificacion.component';
import { FormularioClienteComponent } from './popUp/formulario-cliente/formulario-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreguntaComponent,
    NotificacionComponent,
    FormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
