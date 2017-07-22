import { Component } from '@angular/core';

class Hero {
  id: number;
  name: string;
  superpower: string;
}

class Brew {
  id: string;
  name: string;
  size: string;
}

const HEROES: Hero[] = [
  { id: 12, superpower: "He is great at finding drugs",name: 'Narco' },
  { id: 11, superpower: "", name: 'Mr. Nice' },
  { id: 13, superpower: "", name: 'Bombasto' },
  { id: 14, superpower: "", name: 'Celeritas' },
  { id: 15, superpower: "", name: 'Magneta' },
  { id: 16, superpower: "", name: 'RubberMan' },
  { id: 17, superpower: "", name: 'Dynama' },
  { id: 18, superpower: "", name: 'Dr IQ' },
  { id: 19, superpower: "", name: 'Magma' },
  { id: 20, superpower: "", name: 'Tornado' }
];

const BREWERY: Brew[] = [
    {
      id: "IPA",
      name: "JJ Hoppy",
      size: "Growler",
    },
    {
      id: "Pils",
      name: "JJ Piss",
      size: "Pint",
    },
    {
      id: "Weizen",
      name: "JJ Sweet",
      size: "10oz",
    },
    {
      id: "Stout",
      name: "JJ Chocolate",
      size: "Pint"
    }
  ]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedHero: Hero;
  selectedBrew: Brew;
  heroes: Hero[] = HEROES;
  brews: Brew[] = BREWERY;

  constructor(){
    this.selectedHero = null;
  }
}
