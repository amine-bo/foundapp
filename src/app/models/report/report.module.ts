import { LoginPageModule } from './../login/login.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportPage } from './report.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageModule,
    RouterModule.forChild([{ path: '', component: ReportPage }])
  ],
  declarations: [ReportPage]
})
export class ReportPageModule { }
