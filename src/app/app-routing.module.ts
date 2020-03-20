import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login-routing.module').then(mod => 
    mod.LoginRoutingModule)
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'mailbox',
  component: MailboxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
