import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'finished',
  templateUrl: 'app/finished/finished.component.html',
  styleUrls: ['app/finished/finished.component.css']
})
export class FinishedComponent {
  correctCount: number;
  constructor(
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    this.correctCount = +this._routeParams.get('correctCount');
  }

  goBack() {
    window.history.back();
  }
}
