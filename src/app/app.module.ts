import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { MenuComponent } from './menu/menu.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt, 'pt');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    JurosCompostosComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
  ],
  providers: [],

})
export class AppModule { }
