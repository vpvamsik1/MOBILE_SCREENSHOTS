import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';
import { VoicemailComponent } from './voicemail/voicemail.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { BottomNavbar2Component } from './components/bottom-navbar2/bottom-navbar2.component';
import { IndividualMessageComponent } from './individual-message/individual-message.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { BottomNavbar3Component } from './components/bottom-navbar3/bottom-navbar3.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { DesktopMessagesComponent } from './desktop-messages/desktop-messages.component';
import { DesktopVoicemailComponent } from './desktop-voicemail/desktop-voicemail.component';
import { BottomNavbar5Component } from './components/bottom-navbar5/bottom-navbar5.component';
// import { BottomNavbar4Component } from './bottom-navbar4/bottom-navbar4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessagesComponent,
    VoicemailComponent,
    BottomNavbarComponent,
    BottomNavbar2Component,
    IndividualMessageComponent,
    Navbar2Component,
    BottomNavbar3Component,
    HomeScreenComponent,
    DesktopMessagesComponent,
    DesktopVoicemailComponent,
    BottomNavbar5Component,
    // BottomNavbar4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
