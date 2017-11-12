import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
// Components
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppDevtoolsComponent } from './app-devtools/app-devtools.component';
import { AppObjectTierComponent } from './app-object-tier/app-object-tier.component';
import { AppObjectPropertyComponent } from './app-object-property/app-object-property.component';
import { AppSearchbarComponent } from './app-searchbar/app-searchbar.component';
// Services
import { AppBroadcaster } from './services/app-broadcaster.service';
import { WindowRef } from './services/app-window-ref.service';
// Pipes
import { FilterPipe } from './pipes/filterby.pipe';
import { PropertiesPipe } from './pipes/properties.pipe';

const appRoutes: Routes = [{
    path: '',
    component: AppDevtoolsComponent
  }, {
    path: '**', // a catch all for page not found, maybe make a PageNotFoundComponent
    component: AppDevtoolsComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    AppHomepageComponent,
    AppNavbarComponent,
    AppDevtoolsComponent,
    AppObjectTierComponent,
    AppObjectPropertyComponent,
    AppSearchbarComponent,
    FilterPipe,
    PropertiesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppBroadcaster,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
