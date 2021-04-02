import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() drinks:string[];

}
