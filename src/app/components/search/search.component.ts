import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  result: any[] = [];

  constructor( private heroesService: HeroesService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe (params => {
      this.result = this.heroesService.buscarHeroe(params['termino']);
    });    

  }
  ngOnInit() {
  }

}
