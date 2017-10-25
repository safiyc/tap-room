import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from './kombucha.model';

@Component({
  selector: 'kombucha-list',
  template: `
  <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
    <option value="allKombuchas">All Kombuchas</option>
    <option value="lowKombuchas">Low Kombuchas</option>
  </select>
  <ul>
    <li *ngFor="let currentKombucha of childKombuchaList | emptiness:filterByEmptiness">
      <h5>Brand: {{currentKombucha.brand}}</h5>
      <p>Flavor: {{currentKombucha.flavor}}</p>
      <p>Price: $ {{currentKombucha.price}}</p>
      <p>Remaining Pints: {{currentKombucha.pints}}</p>
      <button (click)="editButtonHasBeenClicked(currentKombucha)" class="btn-large waves-effect waves-light">Edit!</button>
      <button (click)="sellButtonHasBeenClicked(currentKombucha)" class="btn-large waves-effect waves-light">Sell</button>
    </li>
  `
})

export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  filterByEmptiness: string = "allKombuchas";

  editButtonHasBeenClicked(kombuchaToEdit: Kombucha) {
    this.clickSender.emit(kombuchaToEdit);
  }

  sellButtonHasBeenClicked(kombuchaToSell: Kombucha) {
    this.sellSender.emit(kombuchaToSell);
  }

  onChange(optionFromMenu) {
    this.filterByEmptiness = optionFromMenu;
  }
}
