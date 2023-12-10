import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-findbyname',
  templateUrl: './findbyname.component.html',
  styleUrls: ['./findbyname.component.css']
})
export class FindbynameComponent implements OnInit {
    players: Player[] = [];
  
    constructor(private playerService: PlayerService) { }
  
    ngOnInit(): void {
      this.loadPlayers();
    }
  
    loadPlayers() {
      this.playerService.getPlayers().subscribe(
        (data: Player[]) => {this.players = data;
        console.log(this.players);
      },
      (error:any)=>{
        console.log("Error occurred",error);
      });
  
    }
    
}
