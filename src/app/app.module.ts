import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Componentes */
import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './modulos/layaout/layout-login/layout-login.component';
import { LayoutHomeComponent } from './modulos/layaout/layout-home/layout-home.component';
import { appRutas } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
