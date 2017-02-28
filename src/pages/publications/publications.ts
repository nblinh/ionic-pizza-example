import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyService } from '../../services/myservice';
import { Publication } from '../../classes/Publication';

/*
  Generated class for the Publications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-publications',
    templateUrl: 'publications.html',
    providers: [MyService]
})
export class PublicationsPage {

    publications : Publication[];

    constructor(public navCtrl: NavController, private myservice: MyService) {
	this.sendRequest();
    }

    private sendRequest() {
	this.myservice.getIrtPublications().subscribe(
	    data => { this.processResponse(data.json().response.docs);},
	    err => console.error(err),
	    () => console.log('function getPublications completed')
	);
    }

    private processResponse(response : any) {
	this.publications = [];
	var i = 0;
	while (i < response.length)
	{
	    var s = response[i].label_s.split('.');
	    this.publications.push(new Publication(s[1], s[0], s[2]));
	    i++;
	}
    }

    ionViewDidLoad() {
	console.log('ionViewDidLoad PublicationsPage');
    }

}
