import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const APIkey = 'e696fe7c349930c01c58256fdee85983';

@Injectable() 
export class ItunesdataService {
 
  constructor(private http: HttpClient) { }

  getData(query,category) {
    var URL = 'https://api.themoviedb.org/3/search/' + category + '?api_key='+ APIkey+'&query=' + query;
    // var URL = 'https://itunes.apple.com/search?term=' + query +'&country=us&entity=' + category;
    return this.http.get(URL);
  } 

  getFullData(id) {
    var URL = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + APIkey + '&append_to_response=videos';
    return this.http.get(URL);
  }

}
