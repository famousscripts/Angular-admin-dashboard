import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalComponent } from './_directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ModalService } from './_services';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ModalComponent,
    ContactComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ModalService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
