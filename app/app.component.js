System.register(['angular2/core', 'angular2/router', './heroes/hero.service', './heroes/heroes.component', './heroes/hero-detail.component', './tweets/tweet.service', './tweets/tweets.component', './tweets/tweet-detail.component', './dashboard.component', './quiz.component', './result/result.component', './finished/finished.component'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1, heroes_component_1, hero_detail_component_1, tweet_service_1, tweets_component_1, tweet_detail_component_1, dashboard_component_1, quiz_component_1, result_component_1, finished_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (tweet_detail_component_1_1) {
                tweet_detail_component_1 = tweet_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (quiz_component_1_1) {
                quiz_component_1 = quiz_component_1_1;
            },
            function (result_component_1_1) {
                result_component_1 = result_component_1_1;
            },
            function (finished_component_1_1) {
                finished_component_1 = finished_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Kanye or nah?';
                }
                AppComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n        <a [routerLink]=\"['Quiz']\">Quiz</a>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Heroes']\">Heroes</a>\n        <a [routerLink]=\"['Tweets']\">Tweets</a>\n    </nav>\n\n    <router-outlet></router-outlet>\n    ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService,
                            tweet_service_1.TweetService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: '/quiz',
                            name: 'Quiz',
                            component: quiz_component_1.QuizComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/HeroDetail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/tweets',
                            name: 'Tweets',
                            component: tweets_component_1.TweetsComponent
                        },
                        {
                            path: '/TweetDetail/:id',
                            name: 'TweetDetail',
                            component: tweet_detail_component_1.TweetDetailComponent
                        },
                        {
                            path: '/Result/:id',
                            name: 'Result',
                            component: result_component_1.ResultComponent
                        },
                        {
                            path: '/Finised/:correctCount',
                            name: 'Finished',
                            component: finished_component_1.FinishedComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map