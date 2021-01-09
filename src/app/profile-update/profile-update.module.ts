import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProfileUpdateRoutingModule } from './profile-update-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProfileUpdateComponent } from './profile-update.component';
import { FloatLabel } from "../float-label/float-label.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";



@NgModule({
  declarations: [ProfileUpdateComponent, FloatLabel],
  imports: [
    ProfileUpdateRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    
   
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileUpdateModule { }
