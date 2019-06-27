import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { VoicemailComponent } from './voicemail/voicemail.component';
import { IndividualMessageComponent } from './individual-message/individual-message.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [

  { path: '', component: HomeScreenComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'voicemail', component: VoicemailComponent},
  { path: 'individualMessage', component: IndividualMessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
