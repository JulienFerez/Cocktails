import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public fruits: string[] = ['fraises', 'kiwi', 'pomme'];

  public addFruit() {}

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter((f) => f !== fruit);
  }
}
