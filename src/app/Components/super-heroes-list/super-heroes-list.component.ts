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
  

//Filtre les caractéristiques .biography.alignment 
  private get _Filteralignement():Iprofile[]{
    return this.heroes.filter(hero => hero.biography.alignment  === this.goodonly)
  }

//Filtre les caractéristiques .appearance?.gender
  private get _Filtergender():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance?.gender  === this.gender)
  }

//Quand j'ai une caractéristiques comme sa eye-color avec Tiret je dois procéder comme ceci => hero.appearance['full-name'] 
  private get _FiltereyeColor():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance['eye-color']  === this.gender) // Filtre la eye-color 
  }
  private get _FilterhairColor():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance['hair-color']  === this.gender) // Filtre la hair-color
  }
  private get _FilterfullName():Iprofile[]{
    return this._Filteralignement.filter(hero => hero.appearance['full-name']  === this.gender) // Filtre le full-name'
  }


//Afficher les Héros par rappport au  meters des Héros
  public get goodHeroes():Iprofile[]{
    return this._heroesHeight.slice(0 ,20)  // ICI on choisi d'afficher  20 Card Héros Maximun avec le .slice(0 ,10) 
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

//Boucle pour avoir des ID aléatoire lors des chargement des caractéristiques
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

  public defaultsrc(img : HTMLImageElement){
    img.src = "./assets/NotFound.png"
  }

}
