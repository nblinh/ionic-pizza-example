import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SearchResponse } from "elasticsearch";

@Injectable()
export class ElasticSearchService {
    private _client: Client;

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new Client({
            host: 'elasticsearch.default-staging.k8s.imm.ovh',
            log: 'trace'
        });
    }
    
    /*search(): any {
            console.log()
            return this._client.search({
                index: 'terrains',
                q: `match_all:{}`
            })
    }*/
    search(value): any {
        if (value) {
            console.log(value)
            return this._client.search({
                index: 'terrains',
                q: `_all:${value}`
            })
        } else {
            return Promise.resolve({})
        }
    }

    addToIndex(value): any {
        return this._client.create(value)
    }

    isAvailable(): any {
        return this._client.ping({
            requestTimeout: Infinity
        });
    }
}