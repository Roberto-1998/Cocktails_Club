import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';


@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  cocktail;

  constructor(
    private _cocktails:CocktailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchParams();
  }


  fetchParams(){
   this.route.params.subscribe((params)=>{
     console.log(params['id']);
     let id=params['id'];
     this.fetchCocktailDetails(id);
   })
  }

  fetchCocktailDetails(id){
      this._cocktails.getCocktailDetails(id).subscribe((data)=>{
        console.log(data);
        this.cocktail=data;
      })
  }

}
