import {Tweet} from './tweet';
import {TWEETS} from './mock-tweets';
import {Injectable} from 'angular2/core';

@Injectable()
export class TweetService {
    getTweet(id: number) {
    return Promise.resolve(TWEETS).then(
      tweets => tweets.filter(tweet => tweet.id === id)[0]
    );
  }

      getTweets() {
        return Promise.resolve(TWEETS);
  }
  getTweetsSlowly() {
    return new Promise<Tweet[]>(resolve =>
      setTimeout(()=>resolve(TWEETS), 2000) // 2 seconds
    );
  }
}
