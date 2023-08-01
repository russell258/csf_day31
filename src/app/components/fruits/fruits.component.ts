import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit{
  fruit: string = 'Durian';
  fullName: string = 'Darryl Ng';
  // xx-small, x-small, small, medium,large,x-large,xx-large
  fontSize: string = 'xxx-large';
  fontWeight: string = 'bold';

  fruits: [{name: string, quantity: number}] = [{name:'apple',quantity:50}];

  ngOnInit(): void {
    this.fruits.push({name:'mango',quantity:10});
    this.fruits.push({name:'durian',quantity:10});
    this.fruits.push({name:'avocado',quantity:25});

  }

  testClick(){
    console.log('Button Test Clicked');
  }

}
