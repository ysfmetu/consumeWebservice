import { Component, OnInit } from '@angular/core';
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data: any;


  constructor(private countryService: CountriesService) {
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
}
