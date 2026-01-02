import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {
  menuCategories = [
    {
      category: 'soup',
      items: [
        { name: 'Tomato Soup', price: 120, desc: 'Fresh tomatoes mild spices' },
        { name: 'Sweet Corn Soup', price: 130, desc: 'Corn kernels with herbs' }
      ]
    },
    {
      category: 'starters',
      items: [
        { name: 'Paneer Chilli', price: 220, desc: 'grilled paneer with spices'},
        { name: 'veg Spring roll', price: 180, desc: 'crispy rolls with veggie filling' }
      ]
    },
    {
      category: 'mainCourse',
      items: [
        { name: 'Paneer Butter Masala', price: 260, desc: 'Rich tomato gravy with butter' },
        { name: 'Veg Biryani', price: 240, desc: 'Aromatic basmati rice & veggies' },
      ]
    },  
    {
      category: 'desserts',
      items: [
        { name: 'Gulab Jamun', price: 90, desc: 'Soft milk dumplings in syrup' },
        { name: 'Ice Cream', price: 100, desc: 'Vanilla / Chocolate' },
      ]
    }  
  ];
}
