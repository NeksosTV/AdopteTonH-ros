import { Iprofile } from './../../Models/iprofile';
import { Component, OnInit } from '@angular/core';
import { HerosService } from 'src/app/service/heros.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})

export class SuperHeroesListComponent implements OnInit {



  public goodonly : string = "good";
  public gender : string = "-";
  public heroes : Iprofile[] = [];
  public wantedSize : number = 0;
  
  private get _Filteralignement():Iprofile[]{
    return this.heroes.filter(hero => hero.biography.alignment  === this.goodonly)
  }

  private get _Filtergender():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance?.gender  === this.gender)
  }

  private get _FiltereyeColor():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance?.eyeColo  === this.gender)
  }


//Afficher par rappport au  meters des Héros
  public get goodHeroes():Iprofile[]{
    return this._heroesHeight.slice(0 ,6)  // ICI on choisi d'afficher de 1 a 10 image  mes pas plus avec le .slice(0 ,10) 
  }

  private get _heroesHeight():Iprofile[]{
    return this._Filtergender.filter(hero => {

      let height = hero.appearance.height[0];
      let number = 0;
      if (height.includes("meters")){
        number = 7
      }
      else{
        number = 3

      }
      return Number(height.substring(0,height.length - number )) >= this.wantedSize
    });
  }
//----------------------------------------------
  constructor(private _ApiService: HerosService) {};
  ngOnInit(){
    for (let i = 1 ; i < 731 ; i++) {
      let sub : Subscription = this._ApiService.getOneSuperHeroesByID(i).subscribe(
        (sh:any) => {
          this.heroes.push(sh);
          sub.unsubscribe();
        }
      )
    }
  }

}
