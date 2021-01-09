import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    ForgotPasswordRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ForgotPasswordModule { }
