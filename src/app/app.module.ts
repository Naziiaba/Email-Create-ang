import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LeftNavComponent } from './mailbox/left-nav/left-nav.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { AppTooltipDirective } from './shared/tooltip.directive';

@NgModule({
  declarations: [
    AppTooltipDirective,
    LeftNavComponent,
    MailboxComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
