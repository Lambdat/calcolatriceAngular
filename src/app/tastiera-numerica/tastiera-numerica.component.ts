import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tastiera-numerica',
  templateUrl: './tastiera-numerica.component.html',
  styleUrls: ['./tastiera-numerica.component.css']
})
export class TastieraNumericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Questo componente figlio deve inoltrare un numero
  //per farlo dobbiamo creare un output di un elemento
  //di tipo EventEmitter che passa un number(o qualsiasi elemento)
  //come generic

  @Output() valore= new EventEmitter<string>();
  @Output() punto = new EventEmitter<string>();
  @Output() pulisci = new EventEmitter<string>();

  aggiungiNumero(event : any){ 
    
    this.valore.emit(event.target.innerText);
  }

  aggiungiPunto(event:any){
    
    this.punto.emit(".");
  }

 aggiungiClear(event:any){
  
  this.pulisci.emit("");
 }


}
