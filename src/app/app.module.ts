import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { EventThumbnailComponent } from './components/events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';

import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
