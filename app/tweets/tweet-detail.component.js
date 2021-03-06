System.register(['angular2/core', 'angular2/router', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, router_1, tweet_service_1;
    var TweetDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetDetailComponent = (function () {
                function TweetDetailComponent(_tweetService, _routeParams) {
                    this._tweetService = _tweetService;
                    this._routeParams = _routeParams;
                }
                TweetDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._tweetService.getTweet(id)
                        .then(function (tweet) { return _this.tweet = tweet; });
                };
                TweetDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                TweetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet-detail',
                        templateUrl: 'app/tweets/tweet-detail.component.html',
                        styleUrls: ['app/tweets/tweet-detail.component.css'],
                        inputs: ['tweet']
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService, router_1.RouteParams])
                ], TweetDetailComponent);
                return TweetDetailComponent;
            }());
            exports_1("TweetDetailComponent", TweetDetailComponent);
        }
    }
});
//# sourceMappingURL=tweet-detail.component.js.map