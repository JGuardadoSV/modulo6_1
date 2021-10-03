import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mapa:Mapboxgl.Map;
  title = 'proyectomapa';

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.tokenmapa;
   this.mapa = new Mapboxgl.Map({
    container: 'contenedormapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-88.94,14.04 ],
    zoom:16.6
    });

    this.marcador(-88.93968893127821,14.040098665086017);

  }


  marcador(lon:number,lat:number){
    const marca=new Mapboxgl.Marker({
      draggable:true
    })
    .setLngLat([lon,lat])
    .addTo(this.mapa);

    marca.on;
  }

}
