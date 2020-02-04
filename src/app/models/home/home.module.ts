import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home.page';
import { MaterialModule } from './../../material.module';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    AutoCompleteModule,
    MomentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    TranslateModule.forChild()
  ],
  declarations: [HomePage]
})
export class Tab1PageModule { }
