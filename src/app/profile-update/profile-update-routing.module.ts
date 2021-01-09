import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ProfileUpdateComponent } from './profile-update.component';

const routes: Routes = [
  {path : '' , component : ProfileUpdateComponent}
  
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProfileUpdateRoutingModule { }
