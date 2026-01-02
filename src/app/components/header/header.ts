import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { Button } from '../button/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  title: string = 'FoodFun';
  logoUrl: string = 'assets/images/food.jpg';
  isMenuOpen: boolean = false;

}

