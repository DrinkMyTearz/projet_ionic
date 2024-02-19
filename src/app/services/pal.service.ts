import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pals } from '../models/pals.model';

@Injectable({
  providedIn: 'root'
})
export class PalService {

  private dbPath = '/pals';
  palsRef: AngularFirestoreCollection<Pals>;

  constructor(private db: AngularFirestore) {
    this.palsRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.palsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
        });
      })
    );
  }

  saveNewPal(pal: Pals) : any {
    return new Observable(obs => {
      this.palsRef.add({...pal}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.palsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(pal: Pals) {
    return new Observable(obs => {
      this.palsRef.doc(pal.id).update(pal);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`pals/${id}`).delete();
  }
}
