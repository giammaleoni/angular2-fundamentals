import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
   color: string,
   title: string,
   value: string,
   id?: string | number,
   createdAt?: string,
   updatedAt?: string,
   userId?: string
}

export interface State {
    notes: Array<Note>;
    user: Object;
}

const defaultState = {
    notes: [],
    user: {}
}
const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable()
    .distinctUntilChanged()
    .do(() => console.log('changes'));

    setState(state: State){
        console.log('state set ', state);
        this._store.next(state);
    }

    getState(): State {
        return this._store.value;
    }

    purge(){
       this._store.next(defaultState);
    }
}