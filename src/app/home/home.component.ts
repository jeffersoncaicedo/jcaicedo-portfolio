import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../services/home.service';
import { MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  index = 0;

  public title = "<Hola, bienvenido\\>";

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.scroll.emit(this.tabGroup.selectedIndex);   
  }
  
  Contact(){
    // this.tabGroup.selectedIndex = 3;
    this.index = 3;
  }
  
  onScroll(direction: 'next' | 'prev'){
    // var scrollPosition = event.deltaY;
    if(direction === 'next' && this.index < this.tabGroup._tabs.length - 1){
      this.tabGroup.selectedIndex = 1;
    }
    else if(direction === 'prev' && this.index > 0){
      this.tabGroup.selectedIndex = 3;
    }
  }

  onScrollChanceTab(event: any){
    console.log(event)
  }

}