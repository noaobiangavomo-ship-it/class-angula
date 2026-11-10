import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-generic-layout',
  styleUrl: './generic-layout.scss',
  templateUrl: './generic-layout.html',
})
export class GenericLayout {}
