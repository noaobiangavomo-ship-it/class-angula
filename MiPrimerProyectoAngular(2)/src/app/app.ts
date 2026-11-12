import { Component } from '@angular/core';
import { Header } from './shared/components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';

@Component({
  imports: [Header, RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  nombre: string = 'Juan';
  cont: number = 0;
}
