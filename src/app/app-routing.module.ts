import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { NahsolutionsComponent } from "./nahsolutions/nahsolutions.component";
import { ArVideoComponent } from "./ar-video/ar-video.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";
import { VideoGettingComponent } from "./video-getting/video-getting.component";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    {path : 'login' , component : LoginComponent },
    {path : 'register' , component : RegisterComponent},
    {path : 'welcome' , component: WelcomePageComponent},
    {path : 'dashboard' , component : DashboardPageComponent},
    {path : 'Dashboard1' , loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path : 'profileupdate' , loadChildren : './profile-update/profile-update.module#ProfileUpdateModule'},
    {path : 'updatepassword'  , loadChildren : './update-password/update-password.module#UpdatePasswordModule'},
    {path : 'forgot-password' , loadChildren : './forgot-password/forgot-password.module#ForgotPasswordModule'},
    {path : 'nahsolutions' , component : NahsolutionsComponent},
    {path : 'arvideo' , component: ArVideoComponent},
    {path : "chatbot" , component:ChatbotComponent},
    {path : 'video' , component: VideoGettingComponent}
   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
