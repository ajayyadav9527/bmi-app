import { Component } from '@angular/core';
import { BmiServiceService } from '../bmi-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  title = 'bmi-calcy';
  height: number = 0;
  weight: number = 0;
  bmiResult: string = '';

  constructor(private router: Router, private bmiService: BmiServiceService) {}

  calculateBMI() {
    if (this.height <= 0 || this.weight <= 0) {
      alert('Please enter valid numbers for height and weight.');
      return;
    }

    const heightInMeters = this.height / 100;
    const weightInKg = this.weight;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const formattedBmi = parseFloat(bmi.toFixed(2)); // Format BMI to 2 decimal places

    // Store the formatted BMI value in the service
    this.bmiService.setBMIValue(formattedBmi);
    // Determine BMI category and navigate to the appropriate page
    if (bmi < 18.5) {
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
      this.router.navigate(['/underweight']);
    } else if (bmi < 24.9) {
      this.bmiResult = `Your BMI is ${bmi.toFixed(
        2
      )}. You have a normal weight.`;
      this.router.navigate(['/normal-weight']);
    } else if (bmi < 29.9) {
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
      this.router.navigate(['/overweight']);
    } else {
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
      this.router.navigate(['/obese']);
    }
  }

}
