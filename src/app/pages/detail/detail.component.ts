import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  public url: string = 'http://localhost:5000/'
  public project!: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this._route.params.subscribe(
      data => {
        let id = data['id']
        this.getProject(id)
      }
    )
  }

  getProject(id: string) {
    this._projectService.getProjectById(id).subscribe(
      project => {
        this.project = project
      },
      error => console.log(error)
    );
  }

  deleteProject(id: string) {
    this._projectService.deleteProjectById(id).subscribe(respo => {
      this._router.navigate(['/proyectos']);
    })
  }

}
