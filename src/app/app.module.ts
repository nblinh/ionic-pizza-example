import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { WelcomePage } from '../pages/welcome/welcome';
import { DetailsPage } from '../pages/details/details';
import { PublicationsPage } from '../pages/publications/publications';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    WelcomePage,
	DetailsPage,
	PublicationsPage,
	SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    WelcomePage,
	DetailsPage,
	PublicationsPage,
	SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
