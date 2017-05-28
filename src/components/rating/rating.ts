import { Component } from '@angular/core';

/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  text: string;

  constructor() {
    console.log('Hello RatingComponent Component');
    this.text = 'Hello World';
  }

}
