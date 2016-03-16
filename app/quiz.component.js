System.register(['angular2/core', 'angular2/router', './tweets/tweet-detail.component', './tweets/tweet.service', "./result/result.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, tweet_detail_component_1, tweet_service_1, result_component_1;
    var QuizComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tweet_detail_component_1_1) {
                tweet_detail_component_1 = tweet_detail_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (result_component_1_1) {
                result_component_1 = result_component_1_1;
            }],
        execute: function() {
            QuizComponent = (function () {
                function QuizComponent(_router, _tweetService) {
                    this._router = _router;
                    this._tweetService = _tweetService;
                    this.tweets = [];
                }
                QuizComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.answerCount = 0;
                    this.correctCount = 0;
                    this._tweetService.getTweets()
                        .then(function (tweets) { return _this.tweets = tweets; });
                    // we dont want to only take 4 random tweets for the quiz
                    //.then(tweets => this.tweets = tweets.slice(1,5));
                };
                QuizComponent.prototype.startQuiz = function (tweets) {
                    console.log("this.tweets: ", this.tweets);
                    this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];
                    //let link = ["TweetDetail", { id: this.selectedTweet.id }];
                    //this._router.navigate(link);
                };
                QuizComponent.prototype.gotoResult = function (answer, tweet) {
                    console.debug('tweet: ', tweet);
                    var somevar = this;
                    if (this.answerCount >= 5) {
                        console.log('if');
                        var link = ["Finished", { correctCount: this.correctCount }];
                        this._router.navigate(link);
                    }
                    else if (tweet.source === "Kanye West" && answer === true) {
                        console.debug('tweet: ', tweet);
                        //console.log('else if');
                        ++this.answerCount;
                        ++this.correctCount;
                        this.selectedTweet = null;
                        this.result = tweet;
                        //this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];
                        this.tweets.slice(this.tweets.indexOf(tweet));
                    }
                    else {
                        //console.log('else');
                        ++this.answerCount;
                        this.selectedTweet = null;
                        this.result = tweet;
                        //this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];
                        this.tweets.slice(this.tweets.indexOf(tweet));
                    }
                };
                QuizComponent.prototype.next = function () {
                    this.result = null;
                    this.selectedTweet = this.tweets[Math.floor(Math.random() * this.tweets.length)];
                };
                QuizComponent = __decorate([
                    core_1.Component({
                        selector: 'my-quiz',
                        templateUrl: 'app/quiz.component.html',
                        styleUrls: ['app/quiz.component.css'],
                        directives: [tweet_detail_component_1.TweetDetailComponent, result_component_1.ResultComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, tweet_service_1.TweetService])
                ], QuizComponent);
                return QuizComponent;
            }());
            exports_1("QuizComponent", QuizComponent);
        }
    }
});
//# sourceMappingURL=quiz.component.js.map