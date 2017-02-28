import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class MyService {

    constructor(private http : Http){}

    getIrtPublications() {
	let publications = this.http.get('https://api.archives-ouvertes.fr/search/IRT-SYSTEMX/?q=*&wt=json');
	return publications;
    }
    
}