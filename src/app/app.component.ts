import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mapa= Mapboxgl.Map;
  title = 'proyectomapa';

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.tokenmapa;
    var map = new Mapboxgl.Map({
    container: 'contenedormapa',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

  }

}
