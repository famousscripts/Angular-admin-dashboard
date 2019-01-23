
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PageComponent } from './components/page/page.component';
const routes: Routes = [
  { path: '', pathMatch: 'full',component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio',component: PortfolioComponent },
  { path: 'contact',component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'page', component: PageComponent },
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
