import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  constructor() {}
  titre = "Mon app de fou furieux"
  assignments = [
    {
      nom:"TP1 sur les components",
      dateDeRendu: '2020-11-11',
      rendu: true,
    },
    {
      nom:"TP2 enervé de fou",
      dateDeRendu: '2020-12-02',
      rendu: false,
    },
    {
      nom:"TP3 enervé, je pleure",
      dateDeRendu: '2021-01-14',
      rendu: true,
    }
  ];
  ngOnInit(): void {}
}
