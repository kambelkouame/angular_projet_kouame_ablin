import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
 // Champs du formulaire
 nomAssignment = "";
 dateDeRenduAssignment!:Date;
 items: MenuItem[]=[];
 home: MenuItem={};
 invalidDates: any
 minDate: any;

 maxDate: any;
  constructor(private assignmentsService:AssignmentsService,
              private router:Router) { }

  ngOnInit(): void {


    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];



    this.items = [
      {label:'assignment', url: '/home'},
      {label:'add'}
    
  ];
  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  onSubmit() {
    console.log(this.nomAssignment);
    console.log(this.dateDeRenduAssignment);

    let newAssignment = new Assignment();
    newAssignment.id = Math.round(Math.random()*1000000); // id entier entre 0 et 1M
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRenduAssignment;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment)
    .subscribe(reponse => {
      console.log(reponse.message);

      // on doit naviguer vers l'URL qui affiche la liste ("" ou "/home")
      // on doit naviguer par programme
      // on retourne à la page d'accueil
      this.router.navigate(["/home"]);
    })
  }

}
