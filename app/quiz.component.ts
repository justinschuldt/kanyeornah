import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


import {TweetDetailComponent} from './tweets/tweet-detail.component';
import {Tweet} from './tweets/tweet';
import {TweetService} from './tweets/tweet.service';

import {ResultComponent} from "./result/result.component";

@Component({
  selector: 'my-quiz',
  templateUrl: 'app/quiz.component.html',
  styleUrls: ['app/quiz.component.css'],
  directives: [TweetDetailComponent, ResultComponent]
})
export class QuizComponent implements OnInit {
  tweets: Tweet[] = [];
  selectedTweet: Tweet;
  result: Tweet;
  answerCount: number;
  correctCount: number;
  somevar: this;
  constructor(
    private _router: Router,
    private _tweetService: TweetService) {


  }
  ngOnInit() {
      this.answerCount = 0;
      this.correctCount = 0;
    this._tweetService.getTweets()
      .then(tweets => this.tweets = tweets);
      // we dont want to only take 4 random tweets for the quiz
      //.then(tweets => this.tweets = tweets.slice(1,5));
  }
  startQuiz(tweets: Tweet) {
      console.log("this.tweets: ", this.tweets);
    this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];
    //let link = ["TweetDetail", { id: this.selectedTweet.id }];
    //this._router.navigate(link);
  }
  gotoResult(answer: boolean, tweet: Tweet) {
      console.debug('tweet: ', tweet);
      let somevar = this;
      if (this.answerCount >= 5){
          console.log('if');
        let link = ["Finished", { correctCount: this.correctCount }];
        this._router.navigate(link);
      }else if (tweet.source === "Kanye West" && answer === true){
          console.debug('tweet: ', tweet);
          //console.log('else if');
          ++this.answerCount;
          ++this.correctCount;
          this.selectedTweet = null;
          this.result = tweet;
          //this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];

          this.tweets.slice(this.tweets.indexOf(tweet));
        //   setTimeout(function(){
        //       console.log('else if timeout');
        //     somevar.selectedTweet = somevar.tweets[Math.floor(Math.random() * somevar.tweets.length)];
        //     console.log('selectedTweet: ', somevar.selectedTweet);
        //     somevar.result = null;
        //   }, 2000);

      } else {
          //console.log('else');
          ++this.answerCount;
          this.selectedTweet = null;
          this.result = tweet;
          //this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];

          this.tweets.slice(this.tweets.indexOf(tweet));
        //   setTimeout(function(){
        //      console.log('else timeout');
        //     somevar.selectedTweet = somevar.tweets[Math.floor(Math.random() * somevar.tweets.length)];
        //     console.log('selectedTweet: ', somevar.selectedTweet);
        //     somevar.result = null;
        //   }, 2000);
      }
  }
  next(){
  this.result = null;
  this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];

  }

}
