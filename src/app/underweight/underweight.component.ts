import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BmiServiceService } from '../bmi-service.service';

@Component({
  selector: 'app-underweight',
  templateUrl: './underweight.component.html',
  styleUrls: ['./underweight.component.css']
})
export class UnderweightComponent implements OnInit {
  constructor(private router: Router, private bmiService: BmiServiceService) {}
  bmi: number = 0;

  ngOnInit(): void {
    this.bmi = this.bmiService.getBMIValue();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
