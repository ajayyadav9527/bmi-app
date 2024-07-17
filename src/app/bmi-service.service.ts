import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiServiceService {
  private readonly BMI_KEY = 'bmiValue';

  setBMIValue(bmi: number): void {
    localStorage.setItem(this.BMI_KEY, bmi.toString());
  }

  getBMIValue(): number {
    const bmi = localStorage.getItem(this.BMI_KEY);
    return bmi ? parseFloat(bmi) : 0;
  }
}
