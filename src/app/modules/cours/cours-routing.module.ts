import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { TableauComponent } from './tableau/tableau.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { PereComponent } from './pere/pere.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { PanierComponent } from './panier/panier.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FatherChatComponent } from './father-chat/father-chat.component';

const routes: Routes = [
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'form', component: FormComponent },
  { path: 'form2', component: Form2Component },
  { path: 'pere', component: PereComponent },
  { path: 'list', component: ListComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'father', component: FatherChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursRoutingModule {}
