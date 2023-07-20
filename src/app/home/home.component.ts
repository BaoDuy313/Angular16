import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Trang Bảo Duy';  
  public age = 15;
  constructor(){}

    ngOnInit(): void {}
   
}