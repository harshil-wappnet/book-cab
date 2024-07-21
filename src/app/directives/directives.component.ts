import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isActive: boolean = false;
  isVisible: boolean = true;
  changeActiveStatus() {
    this.isActive = !this.isActive;
  }
}
