import { Component, Input } from '@angular/core';
import { Person } from '../../classes/Person';

import { ElasticSearchService } from '../../services/esService';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    @Input()
    person = new Person("nblinh", "NGUYEN", "ak@systemx.fr");

    ionViewDidLoad() {
	console.log('ionViewDidLoad WelcomePage');
    }

}
