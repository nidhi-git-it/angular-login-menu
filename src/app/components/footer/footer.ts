import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  title: string = 'FoodFun';
  logoUrl: string = 'assets/images/food.jpg';
  
}


