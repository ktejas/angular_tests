import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AppRoutingModule }        from './app-routing.module';
import { HeroesModule }            from './heroes/heroes.module';
import { AuthModule }              from './auth/auth.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/