import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService,
  ) {
    this.url = 'http://localhost:5000/';
   }


  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        if (response) {
          this.projects = response;
        }
      },
      error => console.log(error)
    );
  }

}
