import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Ofertas } from './components/ofertas/ofertas';
import { Contato } from './components/contato/contato';
import { Cardapio } from './components/cardapio/cardapio';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cardapio', component: Cardapio },
    { path: 'ofertas', component: Ofertas },
    { path: 'contato', component: Contato }
];
