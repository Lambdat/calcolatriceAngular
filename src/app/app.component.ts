import { Component } from '@angular/core';

//il decorator espresso con la @ è un pattern che serve ad aggiungere funzionalità
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcolatriceAngular';

  calcolato = "0"; //verrà passato al @Input() resut del Display Component
  operazione ="";
  risultato ="";

  gestisciNumero(numero : string){
    if(this.calcolato!=="0"){
      this.calcolato = this.calcolato.concat(numero);
    }
    else{
      this.calcolato = numero;
    }
    
    
  }

  gestisciPunto(punto:string){
    console.log("Ricevuto Punto");
    if(!this.calcolato.includes(".")){
      this.calcolato=this.calcolato.concat(punto);
    }
  }

  gestisciClear(clear:string){
    console.log("Ricevuto Clear");
    this.calcolato=clear;
  }

  gestisciOperatore(operatore:string){
    console.log("Ricevuto Operatore");
    this.operazione=operatore;
  
    this.risultato = this.risultato.concat(this.calcolato); //Primo valore salvato
    
    
    this.calcolato="";
    
    

    switch(this.operazione){

      case "=":{
       
        this.calcolato = eval(this.risultato);
        this.risultato="";

      }
      break;
      default:{
        this.risultato= this.risultato.concat(this.operazione);
        console.log(this.risultato);
      }
      break;

    }

    }

  }
    


