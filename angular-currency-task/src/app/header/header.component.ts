import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  CURRENCY_URL = 'https://api.exchangerate.host/latest';

  fromCurrencyDolar = 'USD';
  fromCurrencyEuro = 'EUR';
  toCurrency = 'UAH';
  toCurrencyUAAmountEuro: any = '';
  toCurrencyUAAmountDolar: any = '';

  getEuroTOUah () {
    fetch(`${this.CURRENCY_URL}?base=${this.fromCurrencyEuro}&symbols=${this.toCurrency}`)
      .then(res => res.json())
      .then(data => {
        this.toCurrencyUAAmountEuro = data.rates[this.toCurrency].toFixed(2)
      })
  }

  getDolarTOUah () {
    fetch(`${this.CURRENCY_URL}?base=${this.fromCurrencyDolar}&symbols=${this.toCurrency}`)
      .then(res => res.json())
      .then(data => {
        this.toCurrencyUAAmountDolar = data.rates[this.toCurrency].toFixed(2)
      })
  }

  ngOnInit(): void {
    this.getEuroTOUah();
    this.getDolarTOUah();
  }

}
