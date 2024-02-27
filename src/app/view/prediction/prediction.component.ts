import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../../services/symptoms.service';
import { symptom } from '../../model/symptoms';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.css'
})
export class PredictionComponent implements OnInit {

  symptoms: symptom[];

  constructor(private symptomsService: SymptomsService) { }


  ngOnInit(): void {
    //console.log(this.symptomsService.getSymptoms());
    this.symptomsService.getSymptoms().subscribe(
      (data: symptom[]) => {
        this.symptoms = data

      },
      (error) => {
        console.error('Error fetching symptoms data:', error);
      }
    );
  }


}
