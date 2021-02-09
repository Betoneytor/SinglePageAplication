import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styles: [
  ]
})
export class BusquedaHeroeComponent implements OnInit {
  heroes:Heroe[]=[];
  terminobus="";
  constructor(private _heroesService:HeroesService,
              private activatedRoute: ActivatedRoute,
              private  router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.terminobus=params['termino'];
      console.log(this.heroes);
    } )
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);


  }
}
