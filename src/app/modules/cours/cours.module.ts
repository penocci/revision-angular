import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ObservableComponent } from './observable/observable.component';
import { AdresseComponent } from './adresse/adresse.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { TableauComponent } from './tableau/tableau.component';
import { CoursRoutingModule } from './cours-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PanierComponent } from './panier/panier.component';
import { ArticleComponent } from './article/article.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FatherChatComponent } from './father-chat/father-chat.component';
import { ChildChatComponent } from './child-chat/child-chat.component';
import { PersonneComponent } from './personne/personne.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';


@NgModule({
  declarations: [
    ObservableComponent,
    AdresseComponent,
    StagiaireComponent,
    TableauComponent,
    FormulaireComponent,
    FormComponent,
    Form2Component,
    PereComponent,
    FilsComponent,
    ListComponent,
    ItemComponent,
    ParentComponent,
    ChildComponent,
    PanierComponent,
    ArticleComponent,
    FirstComponent,
    SecondComponent,
    FatherChatComponent,
    ChildChatComponent,
    PersonneComponent,
    EditPersonneComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoursModule {}
