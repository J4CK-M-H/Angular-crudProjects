import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UploadService {

  public url: string = 'https://localhost:5000/project/add';

  constructor(private _httpClient: HttpClient) { }
  

  makeFileUpload(url: string, params: Array<string>, files: Array<File>, name: string) {

    return new Promise( function(resolve, reject) {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      for (let index = 0; index < files.length; index++) {
        formData.append(name, files[index], files[index].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(JSON.parse(xhr.response));
        }else {
          reject(xhr.response);
        }
      }

      xhr.open('POST', url, true);
      xhr.send(formData);
    })
  }

}