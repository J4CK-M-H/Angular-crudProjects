import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateComponent } from './pages/create/create.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactoComponent,
    NotFoundComponent,
    CreateComponent,
    SkillsComponent,
    ProjectsComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
