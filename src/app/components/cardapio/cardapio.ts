import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-cardapio',
  imports: [DecimalPipe, NgOptimizedImage],
  templateUrl: './cardapio.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cardapio {
  cardapio = [
    { nome: 'Coxinha Tradicional', desc: 'Frango cremoso e massa leve', preco: 4.0, img: 'https://images.unsplash.com/photo-1589307004391-9f1a9d7e1b89?auto=format&fit=crop&w=800&q=80' },
    { nome: 'Empada de Palmito', desc: 'Massa leve e crocante', preco: 5.5, img: 'https://images.unsplash.com/photo-1625949275810-3d631af1fbc1?auto=format&fit=crop&w=800&q=80' },
    { nome: 'Quibe com Queijo', desc: 'Temperado e recheado com queijo', preco: 5.0, img: 'https://images.unsplash.com/photo-1601924582971-c9e8b9d9b40b?auto=format&fit=crop&w=800&q=80' }
  ];
}
