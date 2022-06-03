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

make 2 variables **fromCurrency** and **fromCurrency** and put there base and 1st of rates
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
...to be continued
