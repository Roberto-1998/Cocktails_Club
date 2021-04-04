import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  cocktails;
 

  private subjectKeyUp=new Subject<any>();


  constructor(
  private _cocktails:CocktailsService
  ) { }

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(1000)).subscribe((d)=>{
      this.searchCocktail(d);
    });
  }

  onSearch(event){
    const value=event.target.value;
    this.subjectKeyUp.next(value);
  }
  
  searchCocktail(text:string){
     if(text){
        this._cocktails.searchCocktail(text).subscribe((data)=>{
          console.log(data);
          this.cocktails=data;
        })
    }

  }
}

