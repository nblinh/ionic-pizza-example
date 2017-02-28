import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Person } from '../../classes/Person';
import { DetailsPage } from '../details/details';

const PERSONS : Person[] = [ new Person("Ali", "Koudri", "ak@systemx.fr"),
			     new Person("Pierpaolo", "Cincilla", "ppc@systemx")
			   ];

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
	persons : Person[] = PERSONS;
    selectedPerson : Person;

  constructor(public navCtrl: NavController) {
  }
  
  details(person : Person) : void {
    this.selectedPerson = person;
	if (!this.selectedPerson) return;
	this.navCtrl.push(DetailsPage, { 'person' : this.selectedPerson });
  }

}
