import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
//It's a smart component
@Component({
  selector: 'donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss'],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: '0001',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the chocolate enthusiast',
      },
      {
        id: '0002',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'For the fudgy self',
      },
      {
        id: '0003',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'Caramel orgasm',
      },
    ];
  }
}
