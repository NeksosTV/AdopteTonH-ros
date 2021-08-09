import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iprofile } from '../Models/iprofile';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private _url : string = 'http://localhost:3000/api';

  // private _token : string = '1458081961231168' ;

  private get _basic_url(): string {
    return `${this._url}/`;                           //${this._token}
  }

  constructor(private _http : HttpClient) {} ;

  public getAllSuperHeroes():Observable<Iprofile[]> {
    return this._http.get<Iprofile[]>(this._basic_url);
  }

  public getOneSuperHeroesByID(id:number):Observable<Iprofile> {
    return this._http.get<Iprofile>(this._basic_url+id);
  }

  public getSuperHeroesByName(name:string):Observable<Iprofile[]> {
    return this._http.get<Iprofile[]>(this._basic_url+'search/'+name);
  }

}
