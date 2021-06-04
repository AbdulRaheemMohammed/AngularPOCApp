import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import '@ui5/webcomponents/dist/button'
import '@ui5/webcomponents/dist/input'
import '@ui5/webcomponents/dist/label'
import { AppComponent } from './app.component';
import { ServerElementComponent } from './server/server-element.component';
import { CockpitComponent } from './cockpit/cockpit/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

