import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Home } from './page/home/home';
import { Catalog } from './page/catalog/catalog';

export const routes: Routes = [ {path:'',component:Home},{path:'home',component:Home},{path:'about', component:About},{ path: 'catalog', component: Catalog } 

];
