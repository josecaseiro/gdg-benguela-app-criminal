import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } 
          from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Registo } from '../models/registo';

@Injectable({
  providedIn: 'root'
})
export class RegistoService {

  
  registos$: Observable<Registo[]> | null = null;
  private registosCollection: AngularFirestoreCollection<Registo>;
  
  constructor(private afs: AngularFirestore) { 
    this.registosCollection = afs.collection<Registo>('registos');
    this.registos$ = this.registosCollection.valueChanges();
  }


  //Adicionar registo
  addRegisto(registo: Registo) {
    const id = this.afs.createId();
    registo.id = id;
    return this.registosCollection.doc(id).set(registo);
  }


  //Eliminar registo
  removeRegisto(registo: Registo){
    return this.registosCollection.doc(registo.id!).delete();
  }

  //Update registo
  updateRegisto(registo: Registo){
    return this.registosCollection.doc(registo.id!).update(registo);
  }

  //Get regitos do cidadao by id
  getCidadaoRegistos(cidadao_id:string){
    const coll = this.afs.collection('registos', ref => ref.where('cidadao_id', '==', cidadao_id));
    return coll.valueChanges();
  }
  
}
