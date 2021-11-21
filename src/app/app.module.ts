import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ElegibilidadeComponent } from './elegibilidade/elegibilidade.component';
import { AssistenciaComponent } from './assistencia/assistencia.component';
import { HeaderAssistenciaComponent } from './assistencia/header-assistencia/header-assistencia.component';
import { ConteudoAssistenciaComponent } from './assistencia/conteudo-assistencia/conteudo-assistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    ElegibilidadeComponent,
    AssistenciaComponent,
    HeaderAssistenciaComponent,
    ConteudoAssistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
