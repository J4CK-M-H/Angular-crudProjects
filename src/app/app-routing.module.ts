import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateComponent } from './pages/create/create.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent 
  },
  {
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'contacto',
    component: ContactoComponent 
  },
  {
    path: 'create',
    component: CreateComponent 
  },
  {
    path: 'proyectos',
    component: ProjectsComponent 
  },
  {
    path: 'proyecto/:id',
    component: DetailComponent
  },
  {
    path: 'editar-proyecto/:id',
    component: EditComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
