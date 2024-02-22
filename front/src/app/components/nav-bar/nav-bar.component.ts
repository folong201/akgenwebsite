import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  
  isButtonActive: boolean = true;

  // Fonction pour toggler la classe 'active'
  toggleActive() {
    this.isButtonActive = !this.isButtonActive;
  }

}
