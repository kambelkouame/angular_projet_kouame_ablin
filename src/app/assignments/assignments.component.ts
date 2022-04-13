import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class AssignmentsComponent implements OnInit {
  titre = 'Application de gestion des assignments !';
  assignments: Assignment[] = [];
  displayedColumns: string[] = ['id', 'nom', 'dateDeRendu', 'rendu'];

  // pour la pagination
  page: number=1;
  limit: number=5;
  totalDocs: number=0;
  totalPages: number=0;
  hasPrevPage?: boolean;
  prevPage?: number;
  hasNextPage?: boolean;
  nextPage?: number;

  loading = false;
  openModal:Boolean = false

  constructor(private assignmentsService: AssignmentsService) {
    //console.log("dans le constructeur")
  }

  // appelé avant l'affichage
  ngOnInit(): void {
    //console.log("dans le ngInit")

    this.getAssignments();
    //console.log("assignmentsService.getAssignments() appelé...");
  }

  getAssignments() {
    this.loading = true;
    this.assignmentsService.getAssignments(this.page, this.limit)
    .subscribe((data) => {
      this.assignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
      //console.log("Données arrivées");
    });
    this.loading = false;
  }

  getColor(index: number) {
    return index % 2 ? 'red' : 'green';
  }

  pageSuivante() {
    this.page++;
    this.getAssignments();
  }

  pagePrecedente() {
      this.page--;
      this.getAssignments();
  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
  }

  updateAssignment(){
    this.openModal=true

  }
  fermeModal(){
    this.openModal=false
  }
}
