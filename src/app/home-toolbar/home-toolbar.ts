import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home-toolbar',
    imports: [
        RouterLink,
      RouterLinkActive
    ],
  templateUrl: './home-toolbar.html',
  styleUrl: './home-toolbar.css'
})
export class HomeToolbar {

}
