import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../_services';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  bodyText: string;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      //alert(id);
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

}
