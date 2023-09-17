import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  public developer: string  = 'JMH'

  constructor(
    private projectServices: ProjectService 
  ) {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
      console.log('Component about destroyed');
      
    }
}
