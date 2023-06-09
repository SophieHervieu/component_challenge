import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  showAge: boolean = true;
  user: {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
  } = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'When life gives you lemons, make lemonade',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  toggleAge(): void {
    this.showAge = !this.showAge; // Inverse la valeur de showAge
  }
}
