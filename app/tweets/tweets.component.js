System.register(['angular2/core', 'angular2/router', './tweet-detail.component', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, router_1, tweet_detail_component_1, tweet_service_1;
    var TweetsComponent;
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
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(_router, _tweetService) {
                    this._router = _router;
                    this._tweetService = _tweetService;
                    this.title = 'Kanye or nah';
                }
                TweetsComponent.prototype.ngOnInit = function () {
                    this.getTweets();
                };
                TweetsComponent.prototype.getTweets = function () {
                    var _this = this;
                    this._tweetService.getTweets().then(function (tweets) { return _this.tweets = tweets; });
                };
                TweetsComponent.prototype.getRandTweet = function (tweets) { this.selectedTweet = tweets[Math.floor(Math.random() * tweets.length)]; };
                ;
                TweetsComponent.prototype.onSelect = function (tweet) { this.selectedTweet = tweet; };
                TweetsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['TweetDetail', { id: this.selectedTweet.id }]);
                };
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets-app',
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .tweets {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 10em;\n  }\n  .tweets li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0em;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .tweets li.selected:hover {\n    color: white;\n  }\n  .tweets li:hover {\n    color: #607D8B;\n    background-color: #EEE;\n    left: .1em;\n  }\n  .tweets .text {\n    position: relative;\n    top: -3px;\n  }\n  .tweets .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0em 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0px 0px 4px;\n  }\n"],
                        template: "\n        <button (click)=\"getRandTweet(tweets)\">RandTweet</button>\n        <tweet-detail [tweet]=\"selectedTweet\"></tweet-detail>\n          <h1>{{title}}</h1>\n        <h2>Tweets:</h2>\n        <ul class=\"tweets\">\n          <li *ngFor=\"#tweet of tweets\"\n            [class.selected]=\"tweet === selectedTweet\"\n            (click)=\"onSelect(tweet)\">\n            <span class=\"badge\">{{tweet.id}}</span> {{tweet.date}}\n          </li>\n        </ul>\n        <div *ngIf=\"selectedTweet\">\n          <h2>\n            {{selectedTweet.body | uppercase}}\n          </h2>\n          <button (click)=\"gotoDetail()\">View Tweet</button>\n        </div>\n        ",
                        directives: [tweet_detail_component_1.TweetDetailComponent],
                        providers: [],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, tweet_service_1.TweetService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map