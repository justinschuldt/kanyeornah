import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Tweet} from './../tweets/tweet';
import {TweetService} from './../tweets/tweet.service';


@Component({
  selector: 'result',
  templateUrl: 'app/result/result.component.html',
  styleUrls: ['app/result/result.component.css'],
  inputs: ['tweet']
})
export class ResultComponent {
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
