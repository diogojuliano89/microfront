import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule } from '@angular/router';
import { ClientAWidgetComponent } from './client-a-widget/client-a-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { Page3RouterModule } from './page3/page3.router.module';
import { Page5Component } from './page5/page5.component';
// import { Page3Module } from './page3/page3.module';

@NgModule({
  imports: [
    BrowserModule,
    // Page3Module,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'client-a/page3'},
      { 
        path: 'client-a', children: [
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
          { path: 'page3', loadChildren: () => Page3RouterModule },
          { path: 'page5', component: Page5Component },
        ]
      },
      { path: '**', component: ErrorComponent }
    ], { useHash: true  }),
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page5Component,
    ErrorComponent,
    ClientAWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    ClientAWidgetComponent
  ]
})
export class AppModule { 

  constructor(private injector: Injector) {
    const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
    customElements.define('client-a-widget', widgetElement);
  }

}
