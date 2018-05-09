import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

// Environments
import { environment } from '../environments/environment';
// Modules
import { ClientModule  } from './modules/client/client.module';
// Components
import { AppComponent } from './app.component';
// Services
import { EmployeeService } from './common/services/employee.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [ EmployeeService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }