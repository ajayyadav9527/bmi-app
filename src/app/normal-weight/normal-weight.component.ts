import { Component, OnInit } from '@angular/core';
import { BmiServiceService } from '../bmi-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-weight',
  templateUrl: './normal-weight.component.html',
  styleUrls: ['./normal-weight.component.css']
})
export class NormalWeightComponent implements OnInit {
  constructor(private router: Router, private bmiService: BmiServiceService) {}
  bmi: number = 0;

  ngOnInit(): void {
    this.bmi = this.bmiService.getBMIValue();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
