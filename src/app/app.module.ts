import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from './login/login.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RegisterComponent } from './register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { registerElement } from 'nativescript-angular/element-registry';
import { Gif } from 'nativescript-gif';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ValidateService } from "./auth/validate.service";
registerElement('Gif', () => Gif);

//keyboard IQ
registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";



import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
 import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


 registerElement("exoplayer", () => require("nativescript-exoplayer").Video);

 //arvideo 
 registerElement("AR", () => require("nativescript-ar").AR);
 

 import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AuthServiceService } from "./auth/auth-service.service";
import { NahsolutionsComponent } from './nahsolutions/nahsolutions.component';
import { ArVideoComponent } from './ar-video/ar-video.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { VideoGettingComponent } from './video-getting/video-getting.component';





registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptHttpClientModule,
        NativeScriptCommonModule 




    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        RegisterComponent,
        WelcomePageComponent,
        DashboardPageComponent,
        NahsolutionsComponent,
        ArVideoComponent,
        ChatbotComponent,
        VideoGettingComponent,
      
    ],
    providers: [
        ValidateService,
        AuthServiceService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
