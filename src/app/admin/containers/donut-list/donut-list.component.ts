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
        promo: 'limited',
        description: 'For the chocolate enthusiast',
      },
      {
        id: '0002',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'For the fudgy self',
      },
      {
        id: '0003',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'Caramel orgasm',
      },
      {
        id: '0004',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.',
      },
      {
        id: '0005',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 169,
        description: 'When life gives you lemons, make some lemon donut!',
      },
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
