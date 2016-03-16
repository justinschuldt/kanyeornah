import {Component}       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroService}     from './heroes/hero.service';
import {HeroesComponent} from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';

import {TweetService}     from './tweets/tweet.service';
import {TweetsComponent} from './tweets/tweets.component';
import {TweetDetailComponent} from './tweets/tweet-detail.component';

import {DashboardComponent} from './dashboard.component';
import {QuizComponent} from './quiz.component';

import {ResultComponent} from './result/result.component';
import {FinishedComponent} from './finished/finished.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Quiz']">Quiz</a>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['Tweets']">Tweets</a>
    </nav>

    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    TweetService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/HeroDetail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
    },
  {
    path: '/tweets',
    name: 'Tweets',
    component: TweetsComponent
  },
  {
    path: '/TweetDetail/:id',
    name: 'TweetDetail',
    component: TweetDetailComponent
  },
  {
    path: '/Result/:id',
    name: 'Result',
    component: ResultComponent
  },
  {
    path: '/Finised/:correctCount',
    name: 'Finished',
    component: FinishedComponent
  },
])

export class AppComponent {
  title = 'Kanye or nah?';
  
  goBack() {
    window.history.back();
  }

}
