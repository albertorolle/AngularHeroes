import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index]);
  }

}
