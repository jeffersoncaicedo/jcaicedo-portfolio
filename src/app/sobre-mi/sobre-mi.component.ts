import { AfterContentInit, Component, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { HomeService } from '../services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less']
})
export class SobreMiComponent implements OnInit{
  private snackBar = inject(MatSnackBar);
  @Output() scrollReached: (new () => EventEmitter<any>) | any

  tabGroup: any;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // this.homeService.scroll.subscribe((value) => {
    //   this.tabGroup = value;
    // })    
  }

  onScrollChanceTab(event: any){
    var scrollPosition = event.deltaY;
    if(scrollPosition < 0){
      this.scrollReached.emit('next')
    }
    else if(scrollPosition >= 15){
      this.scrollReached.emit('prev')
    }
  }

  DownloadCV(){
    this.snackBar.open("Archivo descargado, ¡Gracias!", '',{duration: 3000,});
    const fileURL = "../../assets/cv.pdf";
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = "cv_JeffersonCaicedo.pdf";
    link.click();  

  }
}
