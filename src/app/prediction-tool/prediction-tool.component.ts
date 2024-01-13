import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ml_model_list } from '../lists';
import { town_list } from '../lists';
import { storey_range_list } from '../lists';
import { flat_model_list } from '../lists';

@Component({
  selector: 'app-prediction-tool',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  templateUrl: './prediction-tool.component.html',
  styleUrl: './prediction-tool.component.css'
})
export class PredictionToolComponent {
  ml_models = ml_model_list;
  towns = town_list;
  storey_ranges = storey_range_list;
  flat_models = flat_model_list;

  minDate: Date;
  maxDate: Date;

  predictionForm = this.formBuilder.group({
    mlModel: 'Support Vector Regression',
    town: 'ANG MO KIO',
    storeyRange: '01 TO 03',
    flatModel: '2-room',
    floorAreaSqm: 1,
    leaseCommenceDate: new Date("2022-02-01"),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.predictionForm.value);
  }

  constructor(private formBuilder: FormBuilder) {
    this.minDate = new Date("1960-01-01");
    this.maxDate = new Date("2022-02-01");
  }
}
