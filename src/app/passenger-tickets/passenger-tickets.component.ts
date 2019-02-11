import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';


@Component({
  selector: 'app-passenger-tickets',
  templateUrl: './passenger-tickets.component.html',
  styleUrls: ['./passenger-tickets.component.css'],
  animations:[]
})
export class PassengerTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // variable section

  public destination :string='';
  public tickets=[{destination:'LAX',country:'BJS',gate1:'PEK T1',gate2:'LAX 8',depart:'9:30',arrive:'18:30',date:'19 NOV'}
  ,{destination:'LAX',country:'BJS',gate1:'PEK T1',gate2:'LAX 8',depart:'9:30',arrive:'18:30',date:'19 NOV'}];

}
