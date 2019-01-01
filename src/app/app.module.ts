import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from "./services/dish.service";
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { baseURL } from './shared/baseurl';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent
    ],
    providers: [
        DishService,
        ProcessHTTPMsgService,
        { provide: 'BaseURL', useValue: baseURL}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
