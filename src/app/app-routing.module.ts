import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistenciaComponent } from './assistencia/assistencia.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ElegibilidadeComponent } from './elegibilidade/elegibilidade.component';

const routes: Routes = [
    {path:'elegelibidade', component:ElegibilidadeComponent},
    {path:'autenticacao', component:AutenticacaoComponent},
    {path:'assistencia', component:AssistenciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
