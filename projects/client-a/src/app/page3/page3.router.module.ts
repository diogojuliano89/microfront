import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Page3Component } from './page3.component';
import { Page3Module } from './page3.module';

const routes: Routes = [
  {
    path: '', component: Page3Component,
  }
];

@NgModule({
  imports: [
    CommonModule,
    Page3Module,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class Page3RouterModule { }
