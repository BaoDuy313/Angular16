import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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
    { ten: 'Nho', gia: 3.34, haGia: true },
    { ten: 'Cam', gia: -2, haGia: false },
  ];
  public districts: string[] = ['Quận / Huyện'];
  public vietnamData = [
    { city: 'Tỉnh / Thành Phố', district: [] },
    { city: 'An Giang', district: ['TP A', 'TP B', 'TP C'] },
    { city: 'Hồ Chí Minh', district: ['TP D', 'TP E', 'TP F'] },
  ];

  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    console.log('vietnamData = ', this.vietnamData);

    this.counter=this.common.counter;
    this.counterBinhPhuong=this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
  public resetName(): void {
    console.log('reset name');
    this.name = '';
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
    const search = this.vietnamData.filter(data => data.city === city);
    console.log('Search', search);
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }
  }

}