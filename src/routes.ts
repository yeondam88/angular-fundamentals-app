import { Routes } from '@angular/router';
import { EventsListComponent } from './app/components/events/events-list/events-list.component';
import { EventDetailComponent } from './app/components/events/event-detail/event-detail.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
