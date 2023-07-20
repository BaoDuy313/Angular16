import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Trang Bảo Duy';
  public age = 15;
  public traicay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Ổi'];
  public traicay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: 3, haGia: true },
    { ten: 'Cam', gia: -2, haGia: false },
  ];
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay = ', this.traicay);
  }
  public resetName(): void {
    console.log('reset name');
    this.name = '';
  }
}