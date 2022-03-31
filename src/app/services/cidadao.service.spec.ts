import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore,  } from '@angular/fire/firestore';
import { AngularFirestore } 
          from '@angular/fire/compat/firestore';
import { firebaseConfig } from 'configuracao';
import { Cidadao } from '../models/cidadao';

import { CidadaoService } from './cidadao.service';
import { InjectionToken } from '@angular/core';

describe('CidadaoService', () => {
  let service: CidadaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
      providers: [
        AngularFirestore, InjectionToken
      ]
    });
    service = TestBed.inject(CidadaoService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('#addCidadao should return value from a promise',
    (done: DoneFn) => {
    service.addCidadao(new Cidadao("Teste",25,"Masculino")).then(value => {
      expect(value).toBe();
      done();
    });
  });

});
