import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Tweet} from './tweet';
import {TweetService} from './tweet.service';

@Component({
  selector: 'tweet-detail',
  templateUrl: 'app/tweets/tweet-detail.component.html',
  styleUrls: ['app/tweets/tweet-detail.component.css'],
  inputs: ['tweet']
})
export class TweetDetailComponent {
  tweet: Tweet;

  constructor(
    private _tweetService: TweetService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._tweetService.getTweet(id)
      .then(tweet => this.tweet = tweet);
  }

  goBack() {
    window.history.back();
  }
}
