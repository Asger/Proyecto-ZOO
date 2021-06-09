import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './contenedor/inicio/inicio.component';
import { GaleriaComponent } from './contenedor/galeria/galeria.component';
import { ContactoComponent } from './contenedor/contacto/contacto.component';
import { AnimalesExtincionComponent } from './contenedor/animales-extincion/animales-extincion.component';
import { NosotrosComponent } from './contenedor/nosotros/nosotros.component';
import { MamiferosComponent } from './contenedor/mamiferos/mamiferos.component';
import { PecesComponent } from './contenedor/peces/peces.component';
import { AvesComponent } from './contenedor/aves/aves.component';
import { InsectosComponent } from './contenedor/insectos/insectos.component';
import { AnfibiosComponent } from './contenedor/anfibios/anfibios.component';
import { ReptilesComponent } from './contenedor/reptiles/reptiles.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    ContactoComponent,
    AnimalesExtincionComponent,
    NosotrosComponent,
    MamiferosComponent,
    PecesComponent,
    AvesComponent,
    InsectosComponent,
    AnfibiosComponent,
    ReptilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
