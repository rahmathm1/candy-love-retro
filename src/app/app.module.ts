import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RetroComponent } from './retro/retro.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { HelpComponent } from './help/help.component';

import { MemberService } from "./member.service";
import { TopicService } from "./topic.service";

const appRoutes: Routes = [
  { 
    path: '',
    component: RetroComponent,
    pathMatch: 'full'
  },
  { path: 'members', component: MemberListComponent },
  { path: 'topics', component: TopicListComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    RetroComponent,
    HelpComponent,
    TopicListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
  ],
  providers: [
    MemberService,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
