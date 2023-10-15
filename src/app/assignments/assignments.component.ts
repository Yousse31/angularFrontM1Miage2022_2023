import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  constructor() {}
  titre = "Mon app de fou furieux";
  ajoutActive = false;
  nomDevoir:string = "";
  dateDeRendu:Date = new Date();
  assignments:Assignment[] = [
    {
      nom:"TP1 sur les components",
      dateDeRendu: new Date('2020-11-11'),
      rendu: true,
    },
    {
      nom:"TP2 enervé de fou",
      dateDeRendu: new Date('2020-12-02'),
      rendu: false,
    },
    {
      nom:"TP3 enervé, je pleure",
      dateDeRendu: new Date('2021-01-14'),
      rendu: true,
    }
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
  }, 2000);
}

onSubmit() {
  const newAssignment = new Assignment();
  newAssignment.nom = this.nomDevoir;
  newAssignment.dateDeRendu = this.dateDeRendu;
  newAssignment.rendu = false;

  this.assignments.push(newAssignment);
//event.preventDefault();
}

}
