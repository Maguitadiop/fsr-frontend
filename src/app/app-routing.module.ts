import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';

const routes: Routes = [
  {path: 'addcontact', component:ContactComponent},
  {path: 'deletecontact', component:DeleteContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
