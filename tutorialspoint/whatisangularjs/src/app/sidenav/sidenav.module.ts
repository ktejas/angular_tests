import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SideNavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SideNavComponent]
})
export class SideNavModule { }
