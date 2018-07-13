import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Interal components
import { HomeComponent } from './components/home/home.component';
import { TweetComponent } from './components/tweet/tweet.component';

const routes: Routes = [
  { path: '**',  redirectTo: '', pathMatch: 'full', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, TweetComponent];
