import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public project!: Project;
  public filesToUpload: File[] = [];
  public url: string = 'http://localhost:5000/'

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _uploadService: UploadService,
    private _route: ActivatedRoute
  ) {

  }

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

  fileChangeEvent(fileInput: any): void {
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

  editProject() {
    this._projectService.editProject(this.project).subscribe(
      response => {
        if(response){

          if(this.filesToUpload.length > 0){
            this._uploadService.makeFileUpload('http://localhost:5000/project/upload-image/' + response._id, [], this.filesToUpload, 'image');
          }

          this.project = response;

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Proyecto Actualizado',
            showConfirmButton: false,
            timer: 1500
          });

        }
      },
      error => console.log(error)
    )
  }


}
