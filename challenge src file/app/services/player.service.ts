import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  
  constructor(private http: HttpClient) { }
  addPlayer(body:Player):Observable<Player>{

    console.log(body);

      return this.http.post<Player>("http://localhost:9191/api/player/addplayer",body);

  }
   getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>("http://localhost:9191/api/player/find");}

}
