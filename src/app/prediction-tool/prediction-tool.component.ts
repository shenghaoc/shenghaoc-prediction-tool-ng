import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prediction-tool',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prediction-tool.component.html',
  styleUrl: './prediction-tool.component.css'
})
export class PredictionToolComponent {
  predictionForm = this.formBuilder.group({
    mlModel: [''],
    town: [''],
    storeyRange: [''],
    flatModel: [''],
    floorAreaSqm: [''],
    leaseCommenceDate: [''],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.predictionForm.value);
  }

  constructor(private formBuilder: FormBuilder) { }
}
