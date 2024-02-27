import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-symptoms-card',
  templateUrl: './symptoms-card.component.html',
  styleUrl: './symptoms-card.component.css'
})
export class SymptomsCardComponent {

  @Input() symptom: { name: string; description: string };

}
