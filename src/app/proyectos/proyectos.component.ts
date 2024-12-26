import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.less']
})
export class ProyectosComponent{
  public title = "<Proyectos\\>"; 
  public subtitle = "<Skills\\>"

}
