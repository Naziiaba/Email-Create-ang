import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';


// User Authentification
// The Injectable allows us to inject a class anywhere in Angular.
// This is a singleton. We just created a service line 11-19.

@Injectable()
export class MyAuthClass implements CanActivate {
  canActivate() {
    /**
     * the logic to authenticate the user
     */
    let isAuthenticated: boolean = false;
    if (Math.random() > 0.5) {
      isAuthenticated = true;
    }
    return true;
  }
}
const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login/login-routing.module').then(mod =>
    mod.LoginRoutingModule)
}, {
  path: 'login',
  loadChildren: () => import('./login/login-routing.module').then(mod =>
    mod.LoginRoutingModule)
}, {
  path: 'mailbox',
  loadChildren: () => import('./mailbox/mailbox-routing.module').then(mod =>
    mod.MailboxRoutingModule),
    canActivate: [MyAuthClass]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  providers: [MyAuthClass]
})
export class AppRoutingModule { }
