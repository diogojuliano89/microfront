import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { Page3Component } from './page3.component';
import { Page3RouterModule } from './page3.router.module';
import { Page4Component } from './page4/page4.component';


export const routes = [
  {
    path: '', component: Page4Component, pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, Page3Component],
  declarations: [
    Page3Component,
    Page4Component
  ],
  providers: [
    
  ],
})
export class Page3Module { }
