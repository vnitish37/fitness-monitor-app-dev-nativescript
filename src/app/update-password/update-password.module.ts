import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UpdatePasswordRoutingModule } from './update-password-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UpdatePasswordComponent } from './update-password.component';

@NgModule({
  declarations: [UpdatePasswordComponent],
  imports: [
    UpdatePasswordRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UpdatePasswordModule { }
