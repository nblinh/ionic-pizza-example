import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ElasticSearchService  } from '../../services/esService';
import { Publication } from '../../classes/Publication';
import { Terrain } from '../../classes/Terrain';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
    providers: [ElasticSearchService ]
})
export class SearchPage {
	seachTextModel: string;
    //results$: Subject<Array<any>> = new Subject<Array<any>>();
    results:Terrain[];
    message: string = "";
    active: boolean = false;

    publications : Publication[];
    searchText: string="autoroute";
    
    search() : void {
	    this.myservice.search(this.searchText)
	    .then((searchResult) => {
            let results: Array<any> = ((searchResult.hits || {}).hits || [])// extract results from elastic response
                .map((hit) => hit._source);
            if (results.length > 0) {
                //this.message = "";
                this.results = results;
            }
            /*else {
                if (this.seachTextModel && this.seachTextModel.trim())
                    this.message = "nothing was found";
            }*/
        });
    }

    constructor(public navCtrl: NavController, private myservice: ElasticSearchService ) {
	this.sendRequest();
	this.search();
    }

    /*private sendRequest() {
	this.myservice.search("autoroute").
	    data => { this.processResponse(data.json().response.docs);},
	    err => console.error(err),
	    () => console.log('function getPublications completed')
	
    }*/
    private sendRequest() {
    
    }
    
    

    /*private processResponse(response : any) {
	this.publications = [];
	var i = 0;
	while (i < response.length)
	{
	    var s = response[i].label_s.split('.');
	    this.publications.push(new Publication(s[1], s[0], s[2]));
	    i++;
	}
    }*/

    ionViewDidLoad() {
	console.log('ionViewDidLoad PublicationsPage');
    }

}
