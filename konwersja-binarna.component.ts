import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-konwersja-binarna',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './konwersja-binarna.component.html',
  styleUrl: './konwersja-binarna.component.css'
})
export class KonwersjaBinarnaComponent {
  liczbaDziesietna:number = 0;
  liczbaBin:number = 0;

  wynikB:string = "";
  odwrWynikB:string = "";
  
  wynikDz:number = 0;

  licznikBlokow:number = 0;

  tablicaBinarnych:string[] = ["11111", "111110010" , "1110000", "111100000", "10001111110111100000", "1111110000100000", "101", "101", "101", "101", "101", "101", "101", "101", "101"];
  liczbaKlockow:number = 1;

  // --------------------------------------------- //

  konwersjaBinarna(a:number):string{
    this.wynikB = "";
    this.odwrWynikB = "";
    //console.log(a);

    ///////////////////////////// ZAPIS MA ZNACZENIE!!! //////////////////////// 
    // wynikB += a%2.toString() -> 10 | wynikB = a%2.toString() + wynikB -> 01

    while(a > 0){
      this.wynikB = (a%2).toString() + this.wynikB;
      a = Math.floor(a/2);
      //console.log(a);
    }
    return this.wynikB;
  }

  // --------------------------------------------- //

  konwersjaDziesietna(a:number):number{
    let potega:number = 1;
    let liczbaString:string = a.toString();
    for(let i = liczbaString.length-1; i>=0; i--){
      this.wynikDz += Number.parseInt(liczbaString[i])*potega;
      potega *= 2;
    }

    return this.wynikDz;
  }

  // --------------------------------------------- //

  obliczIloscBlokow(binarna:String):number{
    this.licznikBlokow = 1;
    for(let i = 0; i<binarna.length-1; i++){
      if(binarna[i] == binarna[i+1]){
        continue;
      }
      else{
        this.licznikBlokow++;
      }
    }
    return this.licznikBlokow;
  }

// --------------------------------------------- //

  obliczIloscKlockowWTablicy():void{
      this.liczbaKlockow = 1;
      for(let i = 0; i<this.tablicaBinarnych.length-1; i++){
      if(this.obliczIloscBlokow(this.tablicaBinarnych[i]) >= 2){
        this.liczbaKlockow++;
      }
    }
    console.log(this.liczbaKlockow)
  }
}
