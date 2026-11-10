import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';

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
