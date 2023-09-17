import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from '../../services/upload.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public title: string = '';
  public projects: Project[] = [];
  public filesToUpload: File[] = [];
  public project: Project = {
    _id: '',
    name: '',
    description: '',
    category: '',
    image: '',
    langs: '',
    year: 0,
  };


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    this._projectService.getProjects().subscribe(
      (projects => {
        this.projects = projects
      })
    )
  }


  onSubmit(): void {

    if ([this.project.name, this.project.category, this.project.description, this.project.year].some(field => field === '')) {
      console.log('Datos faltantes');
      return;
    }

    this._projectService.saveProject(this.project)
      .subscribe(
        response => {
          this._uploadService.makeFileUpload('http://localhost:5000/project/upload-image/' + response._id, [], this.filesToUpload, 'image');
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Proyecto Creado',
            showConfirmButton: false,
            timer: 1500
          });

          this._router.navigate(['/proyectos']);

        }, error => console.log(error)
      )

  }

  fileChangeEvent(fileInput: any): void {
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
