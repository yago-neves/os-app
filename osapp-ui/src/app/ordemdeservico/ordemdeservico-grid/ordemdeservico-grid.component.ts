import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordemdeservico-grid',
  templateUrl: './ordemdeservico-grid.component.html',
  styleUrls: ['./ordemdeservico-grid.component.css']
})
export class OrdemdeservicoGridComponent  {

  @Input() ordensdeservico = [];


}
