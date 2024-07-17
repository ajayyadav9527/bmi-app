import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BmiServiceService } from '../bmi-service.service';

@Component({
  selector: 'app-obese',
  templateUrl: './obese.component.html',
  styleUrls: ['./obese.component.css']
})
export class ObeseComponent implements OnInit {
  constructor(private router: Router, private bmiService: BmiServiceService) {}
  bmi: number = 0;

  ngOnInit(): void {
    this.bmi = this.bmiService.getBMIValue();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
