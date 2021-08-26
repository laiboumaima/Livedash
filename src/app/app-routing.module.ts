import { SettingComponent } from './setting/setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';


import { TemplatesComponent } from './templates/templates.component';
const routes: Routes = [
  {path:"",component: FirstpageComponent,  data: {title: 'Dashboard'}},
  {path:"entity/:id",component: EntitiesComponent,  data: {title: 'Data'}},
  
  {path:"form", component: FormComponent,  data: {title: 'ADD Data '}},
  {path: "editor", component: EditorComponent},
  {path: "setting", component: SettingComponent},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
