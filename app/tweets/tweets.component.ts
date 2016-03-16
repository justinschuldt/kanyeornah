import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {TweetDetailComponent} from './tweet-detail.component';
import {Tweet} from './tweet';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweets-app',
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .tweets {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .tweets li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .tweets li.selected:hover {
    color: white;
  }
  .tweets li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .tweets .text {
    position: relative;
    top: -3px;
  }
  .tweets .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`],
    template: `
        <button (click)="getRandTweet(tweets)">RandTweet</button>
        <tweet-detail [tweet]="selectedTweet"></tweet-detail>
          <h1>{{title}}</h1>
        <h2>Tweets:</h2>
        <ul class="tweets">
          <li *ngFor="#tweet of tweets"
            [class.selected]="tweet === selectedTweet"
            (click)="onSelect(tweet)">
            <span class="badge">{{tweet.id}}</span> {{tweet.date}}
          </li>
        </ul>
        <div *ngIf="selectedTweet">
          <h2>
            {{selectedTweet.body | uppercase}}
          </h2>
          <button (click)="gotoDetail()">View Tweet</button>
        </div>
        `,
    directives: [TweetDetailComponent],
    providers: [],



})

export class TweetsComponent implements OnInit {
    tweets: Tweet[];
    selectedTweet: Tweet;
    constructor(
      private _router: Router,
      private _tweetService: TweetService) { }
    ngOnInit() {
        this.getTweets();
    }
    title = 'Kanye or nah';
    getTweets() {
        this._tweetService.getTweets().then(tweets => this.tweets = tweets);
    }

    getRandTweet(tweets: Tweet) { this.selectedTweet = tweets[Math.floor(Math.random() * tweets.length)] };


    onSelect(tweet: Tweet) { this.selectedTweet = tweet; }
    gotoDetail() {
      this._router.navigate(['TweetDetail', { id: this.selectedTweet.id }]);
    }


}
