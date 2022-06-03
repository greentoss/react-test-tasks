import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() {

  }
  // CURRENCY_URL = `https://api.frankfurter.app/latest`;
  CURRENCY_URL = 'https://api.exchangerate.host/latest';
  currencyOptions : any = [];
  fromCurrency: any = '';
  toCurrency: any = '';
  firstCurrency: any = '';
  amount = 1; //
  amountInFromCurrency = true;  //shows if ammount from from or to
  exchangeRate: any = 0;
  fromAmount: any = '';
  toAmount: any = '';

  onChangeFromCurrency(event : Event) {
    this.fromCurrency = (event.target as HTMLInputElement).value;
    // console.log(this.fromCurrency, ' -> new fromcurrency');

    this.changeExchangeRate();

    this.exchangeRate = this.toCurrency;
    // console.log(this.exchangeRate, ' exschange rate');

    this.checkCurrencyAmount();
  }
  onChangeToCurrency(event : Event) {
    this.toCurrency = (event.target as HTMLInputElement).value;
    // console.log(this.toCurrency, ' -> new tocurrency');

    this.changeExchangeRate();

    this.exchangeRate = this.fromCurrency;
    // console.log(this.exchangeRate, ' exschange rate');
    this.checkCurrencyAmount();
  }

  checkCurrencyAmount () {
    if (this.amountInFromCurrency) {
      this.fromAmount = this.amount;
      this.toAmount = this.amount * this.exchangeRate;
    } else {
      this.toAmount = this.amount;
      this.fromAmount = this.amount / this.exchangeRate;
    }
  }

  onChangeFromAmount(event : Event) {
    let newAmount = (event.target as HTMLInputElement).value;
    // console.log(newAmount, 'newAmount in change func')
    this.handleFromAmountChange(+newAmount)

  }
  onChangeToAmount(event : Event) {
    let newAmount = (event.target as HTMLInputElement).value;
    this.handleToAmountChange(+newAmount)
    // console.log(this.toAmount, ' -> new toamount');

  }
  handleFromAmountChange(e:number) {
    console.log(e, 'newAmount in handle func');
    this.fromAmount = e;
    this.amount = e;
    // console.log(this.fromAmount, ' -> new fromamount');
    this.amountInFromCurrency = true;
    this.checkCurrencyAmount();
  }
  handleToAmountChange(e:number) {
    this.toAmount = e;
    this.amount = e;
    this.amountInFromCurrency = false;
    this.checkCurrencyAmount();
  }

  changeExchangeRate() {
    if(this.fromCurrency != null && this.toCurrency != null) {
      fetch(`${this.CURRENCY_URL}?base=${this.fromCurrency}&symbols=${this.toCurrency}`)
        .then(res => res.json())
        .then(data => {
          this.exchangeRate = data.rates[this.toCurrency];
          this.checkCurrencyAmount();
        })
    }
  }

  ngOnInit(): void {
    console.log('init')
    fetch(`${this.CURRENCY_URL}`)
      .then(res => res.json())
      .then(data => {
        this.currencyOptions = [data.base, ...Object.keys(data.rates)];
        console.log(this.currencyOptions);
        // console.log(data.rates)

        this.firstCurrency= Object.keys(data.rates)[0]
        this.fromCurrency = data.base;
        this.toCurrency = this.firstCurrency;
        //for now we have selects vs currency default state and selected update

        this.exchangeRate = data.rates[this.firstCurrency];

        this.fromAmount = this.amount
        this.toAmount = this.fromAmount * this.exchangeRate;

        console.log(this.fromAmount, 'first fromAmount')
        console.log(this.toAmount, 'first toAmount')
      })
  }

}
