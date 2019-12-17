import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DcComponent } from './ac/dc/dc.component';
import { IronComponent } from './iron/iron.component';
import { MetallicaComponent } from './metallica/metallica.component';
import { PinkFComponent } from './pink-f/pink-f.component';
import { QueenComponent } from './queen/queen.component';
import { RedComponent } from './red/red.component';
import { AcDcComponent } from './ac-dc/ac-dc.component';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TituloComponent,
    FooterComponent,
    HomeComponent,
    TarefasComponent,
    DcComponent,
    IronComponent,
    MetallicaComponent,
    PinkFComponent,
    QueenComponent,
    RedComponent,
    AcDcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
