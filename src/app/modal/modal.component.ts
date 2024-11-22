import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  constructor(private homeService: HomeService) {}

  CloseModal(){
    this.homeService.dialog.emit(false);
  }

}
