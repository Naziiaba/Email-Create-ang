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
import { TitleNamePipe } from './shared/nametitle.pipe';
import { UserService } from './shared/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    TitleNamePipe,
    AppTooltipDirective,
    LeftNavComponent,
    MailboxComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [HttpClient, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
