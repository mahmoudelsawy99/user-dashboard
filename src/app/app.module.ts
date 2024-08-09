import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { UserModule } from './features/user/user.module';
import { HoverAnimationDirective } from './core/directives/hover-animation.directive';

@NgModule({
  declarations: [
     HoverAnimationDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule, 
    RouterModule.forRoot([]),
    AppComponent ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
