import { ListaService } from './../sevices/lista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: any;

  constructor(private listaService: ListaService) { }

  ngOnInit() {
    this.listaService.getList().subscribe((resp: any) => {
      this.data = resp;
    });
  }

}
