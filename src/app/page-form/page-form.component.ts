import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  constructor() { }
  id = '';
  data = { 'imagePath': '', 'name': '', 'price': 0, 'discount': 0 };

  imagePath = '';
  name = '';
  price = 0;
  discount = 0;
  total = 0;
  ngOnInit(): void {
    this.id = window.location.href.split('#')[1];
    if (this.id != null) {
      this.data = loadField(this.id);
      this.imagePath = this.data.imagePath;
      this.name = this.data.name;
      this.price = this.data.price;
      this.discount = this.data.discount * 100;
      this.total = this.price - (this.price * this.discount / 100);
    }

  }

  sent(): void {
    alert('Formulario enviado con éxito');
  }

}

function loadField(id: string): any {
  switch (id) {
    case '1':
      return { 'imagePath': 'assets/moto1.webp', 'name': 'SERNA-LYON-150/Rojo', 'price': 7999, 'discount': 0.1 };
    case '2':
      return { 'imagePath': 'assets/moto2.webp', 'name': 'BROZZ-250/NEGRO', 'price': 8999, 'discount': 0.1 };
    case '3':
      return { 'imagePath': 'assets/moto3.webp', 'name': 'BALLUG-NGR/RJO-2023', 'price': 9999, 'discount': 0.1 };
    case '4':
      return { 'imagePath': 'assets/moto4.webp', 'name': 'BALLUG-NGR/GRS-2023', 'price': 120000, 'discount': 0.15 };
    case '5':
      return { 'imagePath': 'assets/moto5.webp', 'name': 'Z-M6-020-WHITE/BLACK', 'price': 6999, 'discount': 0.1 };
    case '6':
      return { 'imagePath': 'assets/moto6.webp', 'name': 'AOF-RED/BLACK', 'price': 7999, 'discount': 0.1 };
    case '7':
      return { 'imagePath': 'assets/moto7.webp', 'name': 'AOF-WHITE/BLACK', 'price': 8999, 'discount': 0.1 };
    case '8':
      return { 'imagePath': 'assets/moto8.webp', 'name': 'BLITZ135/BLANCO', 'price': 10000, 'discount': 0.15 };
    case '9':
      return { 'imagePath': 'assets/moto9.webp', 'name': 'LIBERTY-200/NEGRO', 'price': 9999, 'discount': 0.10 };
    case '10':
      return { 'imagePath': 'assets/moto10.webp', 'name': 'BLITZ135/AZUL', 'price': 10999, 'discount': 0.10 };
    case '11':
      return { 'imagePath': 'assets/moto11.webp', 'name': 'BROZZ-250/ROJO', 'price': 11999, 'discount': 0.10 };
    case '12':
      return { 'imagePath': 'assets/moto12.webp', 'name': 'FOX-250/AZUL', 'price': 15000, 'discount': 0.15 };
    case '13':
      return { 'imagePath': 'assets/casco1.webp', 'name': 'ICH-3110S-/NEGRO-AMARILLO', 'price': 299, 'discount': 0.10 };
    case '14':
      return { 'imagePath': 'assets/casco2.webp', 'name': 'HRO511 - NEGRO / VERDE - L', 'price': 499, 'discount': 0.10 };
    case '15':
      return { 'imagePath': 'assets/casco3.webp', 'name': 'HRO511 - NEGRO / VERDE - XL', 'price': 699, 'discount': 0.10 };
    case '16':
      return { 'imagePath': 'assets/casco4.webp', 'name': 'SHAFT545 - NEGRO / AMARILLO - XL', 'price': 1000, 'discount': 0.15 };
  }
}