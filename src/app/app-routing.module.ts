import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnfibiosComponent } from './contenedor/anfibios/anfibios.component';
import { AnimalesExtincionComponent } from './contenedor/animales-extincion/animales-extincion.component';
import { AvesComponent } from './contenedor/aves/aves.component';
import { ContactoComponent } from './contenedor/contacto/contacto.component';
import { GaleriaComponent } from './contenedor/galeria/galeria.component';
import { InicioComponent } from './contenedor/inicio/inicio.component';
import { InvertebradosComponent } from './contenedor/invertebrados/invertebrados.component';
import { MamiferosComponent } from './contenedor/mamiferos/mamiferos.component';
import { NosotrosComponent } from './contenedor/nosotros/nosotros.component';
import { PecesComponent } from './contenedor/peces/peces.component';
import { ReptilesComponent } from './contenedor/reptiles/reptiles.component';

const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'animalesextincion',component:AnimalesExtincionComponent
  },
  {
    path:'galeria',component:GaleriaComponent
  },
  {
    path:'sobrenosotros',component:NosotrosComponent
  },
  {
    path:'contacto',component:ContactoComponent
  },
  {
    path:'mamiferos',component:MamiferosComponent
  },
  {
    path:'aves',component:AvesComponent
  },
  {
    path:'peces',component:PecesComponent
  },
  {
    path:'anfibios',component:AnfibiosComponent
  },
  {
    path:'reptiles',component:ReptilesComponent
  },
  {
    path:'invertebrados',component:InvertebradosComponent
  },
  {
    path:'', redirectTo:'inicio', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
