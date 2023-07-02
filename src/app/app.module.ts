import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingModule } from './shared/components/landing/landing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  exports: [NgOptimizedImage],
  imports: [BrowserModule, AppRoutingModule, LandingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
