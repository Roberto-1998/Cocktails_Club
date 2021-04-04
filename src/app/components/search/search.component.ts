import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  cocktails;
  termino;
  


  constructor(
  private _cocktails:CocktailsService
  ) { }

  ngOnInit(): void {
  }

  searchCocktail(text){

    this.termino=text;

    setTimeout(()=>{
        console.log(this.termino)
    }, 5000)


     /*  setTimeout(()=>{
        this._cocktails.searchCocktail(text).subscribe((data)=>{
          console.log(data);
          this.cocktails=data;
        })
      }, 5000) */
    
    

  }

}
