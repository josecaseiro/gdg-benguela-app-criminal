import { Component, OnInit } from '@angular/core';
import { Cidadao } from './models/cidadao';
import { CidadaoService } from './services/cidadao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }

  constructor(public cidadaoService: CidadaoService){

  }
  title = 'app-criminal';

  
}
