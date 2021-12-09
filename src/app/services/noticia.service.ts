import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http : HttpClient ) { }

  getNoticias(parametro:any): Observable<any>{

    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametro.pais +'&category='+ parametro.categorias +'&apiKey=cc838abd2afa46ac820109c131e3d741';

    return this.http.get(URL);
  }
}
