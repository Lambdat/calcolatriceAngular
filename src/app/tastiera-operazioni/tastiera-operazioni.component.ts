import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tastiera-operazioni',
  templateUrl: './tastiera-operazioni.component.html',
  styleUrls: ['./tastiera-operazioni.component.css']
})
export class TastieraOperazioniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() operatore = new EventEmitter<string>();

  aggiungiOperatore(event:any){
    console.log(`Premuto l'operatore: ${event.target.innerText}`);
    
    let operatore=event.target.innerText;


    this.operatore.emit(operatore.toString());
  }
}
