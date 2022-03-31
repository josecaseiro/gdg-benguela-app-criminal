import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } 
          from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cidadao } from '../models/cidadao';

@Injectable({
  providedIn: 'root'
})
export class CidadaoService {

  
  cidadaos$: Observable<Cidadao[]> | null = null;
  private cidadaosCollection: AngularFirestoreCollection<Cidadao>;
  
  constructor(private afs: AngularFirestore) { 
    this.cidadaosCollection = afs.collection<Cidadao>('cidadaos');
    this.cidadaos$ = this.cidadaosCollection.valueChanges();
  }


  //Adicionar cidadao
  addCidadao(cidadao: Cidadao) {
    const id = this.afs.createId();
    cidadao.id = id;
    return this.cidadaosCollection.doc(id).set(Object.assign({}, cidadao));
  }

  //Eliminar ciadadao
  removeCidadao(id: string){
    return this.cidadaosCollection.doc(id).delete();
  }

  //Update ciadadao
  updateCidadao(cidadao: Cidadao){
    return this.cidadaosCollection.doc(cidadao.id!)
              .update(Object.assign({}, cidadao));
  }

  //Get cidadao by id
  getCidadao(id:string){
    const coll = this.afs.collection('cidadaos', ref => ref.where('id', '==', id));
    return coll.valueChanges();
  }

}
