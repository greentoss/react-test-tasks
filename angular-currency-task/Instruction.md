# AngularCurrencyTask
we have 1 day for this task


- in angular docs install the app  

``npm inastall -g @angular/cli`` insall angular globaly

``ng new angular-currency-task`` where **angular-currency-task** is a folder

``npm start`` to start an app

- make components, in task we need **header** and **content**

app.component is a base component

make ``ng g c header`` and it will create a header.component in its own folder and will connect everything needed staff to app.component

make ``ng g c content`` - same

- now style the components. watch on levels, header styles are in header.component.css file and so on

- go to content.component.ts  and make there fetch to api and set a default array of 
```javascript
  currencyOptions : any = [];
  CURRENCY_URL = `https://api.frankfurter.app/latest`;

  ngOnInit(): void {
    console.log('init')
    fetch(`${this.CURRENCY_URL}`)
      .then(res => res.json())
      .then(data => {
        this.currencyOptions = [data.base, ...Object.keys(data.rates)];
      })
  }
```
nhOnInit method is like ComponentDidMount in React

- now put those options from **currencyOptions** to your selects in file content.components.html
```javascript
<div class="row currency-to">
  <input class="input currency-to-input" type="number">
  <select class="currency-to-option" name="select">
    <option *ngFor="let item of currencyOptions" value="item">
      {{item}}
    </option>
  </select>
</div>
```
really weird sintax

- now make default values in your **select** tag

make 2 variables **fromCurrency** and **toCurrency** and put there base and 1st of rates
````javascript
this.fromCurrency = data.base;
this.toCurrency = Object.keys(data.rates)[0];
````
after fetch.
- and also put this into **select** tag 
````javascript
<select class="currency-from-option" name="select">
  <option *ngFor="let item of currencyOptions"
  [selected]="item === fromCurrency"
            value="item">
      {{item}}
    </option>
  </select>
//
<select class="currency-to-option" name="select" value='{{toCurrency}}'>
    <option *ngFor="let item of currencyOptions"
            [selected]="item === toCurrency"
            value="item">
      {{item}}
    </option>
  </select>
````
- make Eventliseners to **selects** and store data in your **fromCurrency** and **toCurrency**

the typescript is stupid and u have to show it that event.target.value is valid
````javascript
  onChangeFromCurrency(event : Event) {
    this.fromCurrency = (event.target as HTMLInputElement).value;
    console.log(this.fromCurrency, ' -> new fromcurrency');
  }
  onChangeToCurrency(event : Event) {
    this.toCurrency = (event.target as HTMLInputElement).value;
    console.log(this.toCurrency, ' -> new tocurrency');
  }
````
````javascript
<select (change)="onChangeFromCurrency($event)"
    class="currency-from-option" name="select"
  >
//
<select (change)="onChangeToCurrency($event)"
class="currency-to-option" name="select"
>
````
set the firstCurrency variable as Object.keys(data.rates)[0];

set the exschangerate as this.exchangeRate = data.rates[this.firstCurrency];

set fromAmount and t0Amount

this.fromAmount = this.amount
this.toAmount = this.fromAmount * this.exchangeRate;

initial amount is 1 to fromAmount and *exchangeRate to toAmount

so this variables become the analog of State from React
````javascript
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
````
the difference is that u need to apdate them manually and put in functions that you invoke after evety new change in select or in inputs

make function that wathces what input field is selected and counts the rate
````javascript
checkCurrencyAmount () {
    if (this.amountInFromCurrency) {
      this.fromAmount = this.amount;
      this.toAmount = this.amount * this.exchangeRate;
    } else {
      this.toAmount = this.amount;
      this.fromAmount = this.amount / this.exchangeRate;
    }
  }
````
the data which set to amount have to be put in the component html

<input [value]="fromAmount"
<input [value]="toAmount"

- now make functions that takes amount from 1 field and updates the value of opposite amount field

````javascript
onChangeFromAmount(event : Event) {
    let newAmount = (event.target as HTMLInputElement).value;
    this.handleFromAmountChange(+newAmount)
  }
  onChangeToAmount(event : Event) {
    let newAmount = (event.target as HTMLInputElement).value;
    this.handleToAmountChange(+newAmount)
  }
  handleFromAmountChange(e:number) {
    console.log(e, 'newAmount in handle func');
    this.fromAmount = e;
    this.amount = e;
    this.amountInFromCurrency = true;
    this.checkCurrencyAmount();
  }
  handleToAmountChange(e:number) {
    this.toAmount = e;
    this.amount = e;
    this.amountInFromCurrency = false;
    this.checkCurrencyAmount();
  }
````
watch for updates of values in your so called "state" 

- now all we need is to connect our amounts to select values

this function refetches data and resets it to state
````javascript
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
````
call it when our select is changed in

onChangeFromCurrency() and  onChangeToCurrency()

- make those header table where you fetch only UAH USD and Euro in header component
````javascript
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
````
and pass data into html
````javascript
<h3>Currency for today is:  </h3>
<p><input [value]="toCurrencyUAAmountDolar" class="header-input"/> UAH for <span>1</span> USD</p>
<p><input [value]="toCurrencyUAAmountEuro" class="header-input"/> UAH for <span>1</span> EUR</p>
````
thats all for now
