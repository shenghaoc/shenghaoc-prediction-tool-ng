import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PredictionToolComponent } from './prediction-tool/prediction-tool.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [PredictionToolComponent, RouterOutlet]
})
export class AppComponent {
  title = 'prediction-tool-ng';
}
