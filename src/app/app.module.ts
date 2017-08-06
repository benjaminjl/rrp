import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuildPage } from '../pages/build/build';

import { GlobalVarsProvider } from '../providers/global-vars';

import { ObjectFilterPipe } from '../pipes/pipe.object-filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuildPage,

    ObjectFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuildPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    GlobalVarsProvider
  ]
})
export class AppModule {}
