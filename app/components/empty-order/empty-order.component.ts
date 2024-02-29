import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-order',
  templateUrl: './empty-order.component.html',
  styleUrls: ['./empty-order.component.scss'],
})
export class EmptyOrderComponent  implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
