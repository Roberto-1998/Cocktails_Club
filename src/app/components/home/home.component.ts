import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alcoholicDrinks:string[]=[];
  nonAlcoholicDrinks:string[]=[];

  constructor(
    private _cocktails:CocktailsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  this.spinner.show();
   this.fetchAlcoholicDrinks();
   this.fetchNonAlcoholicDrinks();
  }


  fetchAlcoholicDrinks(){
    this._cocktails.getAlcoholicDrinks().subscribe((data:any)=>{
      console.log(data);
      let tempDrinks:string[]=data;
     this.alcoholicDrinks=tempDrinks.slice(1,10);
   
    }, (error)=>{
      console.log(error);
      this.spinner.hide();
    })
  }

  fetchNonAlcoholicDrinks(){
    this._cocktails.getNonAlcoholicDrinks().subscribe((data:any)=>{
      console.log(data);
      let tempDrinks:string[]=data;
     this.nonAlcoholicDrinks=tempDrinks.slice(1,10);
     this.spinner.hide();
    }, (error)=>{
      console.log(error);
      this.spinner.hide();
    })
  }

}
