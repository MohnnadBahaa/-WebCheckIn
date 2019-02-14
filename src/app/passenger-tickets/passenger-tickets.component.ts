import { Component, OnInit } from "@angular/core";
import {GetTicketDetealiesService} from '../get-ticket-detealies.service'


@Component({
  selector: "app-passenger-tickets",
  templateUrl: "./passenger-tickets.component.html",
  styleUrls: ["./passenger-tickets.component.css"],
  animations: []
})
export class PassengerTicketsComponent implements OnInit {
  constructor(private ticketDetealis : GetTicketDetealiesService) {

  }

  ngOnInit() {
    console.log(this.ticketDetealis.get())

  }

  // variable section GetTicketDetealiesService

  // Test Data
  public destination: string = "";
  public tickets = [
    {
      destination: "LAX",
      country: "BJS",
      gate1: "PEK T1",
      gate2: "LAX 8",
      depart: "9:30",
      arrive: "18:30",
      date: "19 NOV"
    },
    {
      destination: "LAX",
      country: "BJS",
      gate1: "PEK T1",
      gate2: "LAX 8",
      depart: "9:30",
      arrive: "18:30",
      date: "19 NOV"
    }
  ];

  // Css Class buttons
  public buttonClassRefund = {
    RefundButton: true,
    animated2: false,
    swing: false,
    zoomOut:false,
    animated3:false,
  };
  public buttonClassChange = {
    ChangeButton: true,
    animated2: false,
    swing: false,
    zoomOut:false,
    animated3:false,
  };
  public buttonClassCheckIn = {
    CheckInButton: true,
    animated2: false,
    swing: false,
    zoomOut:false,
    animated3:false,
  };
  public ticketBody = {
    card: true,
    animated3: false,
    tada: false,
    hinge:false,
    animated:false
  };

  public ticketHeader={
    hinge:false,
    animated:false

  }
  public paper={
    animated1:true,
    fadeInDown:true,
    paper:true,
    flipOutY:false,
    animated :false

  }



  // the index of the hover ticket
  public selectTicketIndex = -1;
  public selectButtonName='';
  public selectTicketBodyIndex=-1;
  public clickedTicket=-1;
  public color='white';


  // Method section

  // change the class when the user hover on the button
  inHover(i, event) {
    let value = event.target.getAttribute("name");
    this.selectButtonName=value;
    this.selectTicketIndex = i;
    if (value === "Refund") {
      setTimeout(() => {
        this.buttonClassRefund.animated2 = true;
        this.buttonClassRefund.swing = true;
      }, 500);
    } else if (value === "Change") {
      setTimeout(() => {
        this.buttonClassChange.animated2 = true;
        this.buttonClassChange.swing = true;
      }, 500);
    } else if (value === "CheckIn") {
      setTimeout(() => {
        this.buttonClassCheckIn.animated2 = true;
        this.buttonClassCheckIn.swing = true;
      }, 500);
    }
  }

  // change the class when the user hover out the button
  outHover() {
    this.buttonClassRefund.animated2 = false;
    this.buttonClassRefund.swing = false;
    this.buttonClassCheckIn.animated2 = false;
    this.buttonClassCheckIn.swing = false;
    this.buttonClassChange.animated2 = false;
    this.buttonClassChange.swing = false;
    this.selectTicketIndex = -1;
    this.selectButtonName='';
  }

// change the class when the user hover on the ticket body
  inHoverTicketBody(i){
    this.selectTicketBodyIndex=i;
    this.color='lightblue'


  }
  // change the class when the user hover out the ticket body
  outHoverTicketBody(i){

    this.selectTicketBodyIndex=-1;
    this.color='white'

  }

  // when the user click the button
  clickButton(i,event){
   let value= event.currentTarget.name;
   console.log(value)
   if (value === "Refund") {

      this.buttonClassRefund.animated2 = false;
      this.buttonClassRefund.swing = false;
      this.buttonClassRefund.zoomOut=true;
      this.buttonClassRefund.animated3=true;

  } else if (value === "Change") {

      this.buttonClassChange.animated2 = false;
      this.buttonClassChange.swing = false;
      this.buttonClassChange.zoomOut=true;
      this.buttonClassChange.animated3=true;

  } else if (value === "CheckIn") {

      this.buttonClassCheckIn.animated2 = false;
      this.buttonClassCheckIn.swing = false;
      this.buttonClassCheckIn.zoomOut=true;
      this.buttonClassCheckIn.animated3=true;

  }

  }

    // when the user click the ticket body
    ticketBodyClick(i){

      this.paper.animated1=false;
      this.paper.fadeInDown=false;
      this.paper.flipOutY=true;
      this.paper.animated=true;

    }


}


