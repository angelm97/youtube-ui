import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  users: any[];

  constructor(private userService: UsersServicesService) {}

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

  //Function to open the slide-menu

  openSlideMenu() {
    this.closeAllDropdown();
    document.getElementById('side-menu').style.width = '100%';
    document.getElementById('menu-style').style.width = '63mm';
  }

  //Function to close the slide-menu

  closeSlideMenu() {
    this.closeAllDropdown();
    document.getElementById('menu-style').style.width = '0';


    document.getElementById('side-menu').style.width = '0';
  }

  //Function to open and close the dropdown menu

  dropdownOpen(num) {
    var element = document.getElementById('dropdown-' + num);
    if (element.style.display == 'block') {
      element.style.display = 'none';
    } else {
      this.closeAllDropdown();
      element.style.display = 'block';
    }
  }

  closeAllDropdown() {
    document.getElementById('dropdown-1').style.display = 'none';
    document.getElementById('dropdown-2').style.display = 'none';
    document.getElementById('dropdown-3').style.display = 'none';
    document.getElementById('dropdown-4').style.display = 'none';
  }

  menuOut(){
    this.closeSlideMenu();
  }
}
