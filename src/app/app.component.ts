import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Injectable';
  public Formulaire : FormGroup;
  constructor(private _formBuilder : FormBuilder){
    
    this.Formulaire = this._formBuilder.group([
      {Homme : [null,null]}, {Femme : [null,null]}, {Indeterminate : [null,null]}
    ]);

  }
  public ValidFormulaire(){
    let Values = this.Formulaire.value;
    let Homme = Values["Homme"]
    console.log(Values);
    
    console.log(Homme);

    
  }
}

