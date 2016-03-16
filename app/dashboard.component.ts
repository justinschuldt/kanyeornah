import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';

import {Tweet} from './tweets/tweet';
import {TweetService} from './tweets/tweet.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  tweets: Tweet[] = [];
  constructor(
    private _router: Router,
    private _heroService: HeroService,
    private _tweetService: TweetService) {
  }
  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
    this._tweetService.getTweets()
      .then(tweets => this.tweets = tweets.slice(1,5));
  }
  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
    }
  gotoTweetDetail(tweet: Tweet) {
    let link = ['TweetDetail', { id: tweet.id }];
    this._router.navigate(link);
  }

}
