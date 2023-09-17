import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({providedIn: 'root'})
export class ProjectService {
  [x: string]: any;
  
  public url: string = 'http://localhost:5000/project';

  constructor(
    private _http: HttpClient
  ) { }
  

  getProjects(): Observable<Project[]> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get<Project[]>(`${this.url}/projects`, {headers: headers});
  }

  saveProject(project: Project) {

    let body = JSON.stringify(project);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post<Project>(`${this.url}/add`, body ,{ headers });
  }

  getProjectById(projectId: string): Observable<Project> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get<Project>(`${this.url}/${projectId}`,{ headers });
  }

  deleteProjectById(projectId: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const response = this._http.delete(`${this.url}/${projectId}`, { headers });
    return response;
  }

  editProject(project: Project): Observable<Project> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(project);
    const response = this._http.put<Project>(`${this.url}/${project._id}`, body ,{ headers });
    return response;
  }
}