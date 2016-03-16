System.register(['./mock-tweets', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_tweets_1, core_1;
    var TweetService;
    return {
        setters:[
            function (mock_tweets_1_1) {
                mock_tweets_1 = mock_tweets_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweet = function (id) {
                    return Promise.resolve(mock_tweets_1.TWEETS).then(function (tweets) { return tweets.filter(function (tweet) { return tweet.id === id; })[0]; });
                };
                TweetService.prototype.getTweets = function () {
                    return Promise.resolve(mock_tweets_1.TWEETS);
                };
                TweetService.prototype.getTweetsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_tweets_1.TWEETS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                TweetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TweetService);
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map