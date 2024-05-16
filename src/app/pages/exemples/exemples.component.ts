import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.css']
})
export class ExemplesComponent {
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
    closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
   }
}