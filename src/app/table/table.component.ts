import { Component, OnInit } from '@angular/core';
import { Player } from '../Module/player';
import { PlayerService } from '../Service/player.service';
import { ResourceLoader } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router){}

  deletePlayer!:Player;
  value:string = "placeholder";
  generatedId!:string;
  playerFromDB: Player[]=[];
  newPlayerName:string='';
  newPlayerNationImg:string='';
  newPlayerRating:number=0;
  newPlayerPosition:string='';
  newPlayerImg:string='';
  newPlayerClubImg='';
  PAC:number=0;
  SHO:number=0;
  PAS:number=0;
  DRI:number=0;
  DEF:number=0;
  PHY:number=0;



  newPlayerId:string=Date.now().toString();
  any!:Player;

  getPlayers(){
    if(this.playerService===undefined){return}
    this.playerService.getPlayers().subscribe(result=>
      {
        this.playerFromDB=result;
      })
  }

  addPlayer(addForm: NgForm){
    
    let newPlayer = {id: this.newPlayerId,name: this.newPlayerName, nationImg: this.newPlayerNationImg, 
      position: this.newPlayerPosition, rating: this.newPlayerRating ,playerImg: this.newPlayerImg, clubImg: this.newPlayerClubImg,
      PAC: this.PAC, SHO: this.SHO, PAS: this.PAS, DRI: this.DRI, DEF: this.DEF, PHY: this.PHY  };
    this.playerService.addPlayer(newPlayer);
    addForm.reset();

  }
  
  ngOnInit(){
    this.getPlayers();
    
  }


  ddeletePlayer(id: string): void {
    this.playerService.deletePlayer(id)
  }

  public onOpenModal(player : Player, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPlayerModal');
      console.log("add");
    }
    if (mode === 'edit') {
      // this.editEmployee = employee;
      button.setAttribute('data-target', '#updatePlayerModal');
    }
    if (mode === 'delete') {
      this.deletePlayer = player;
      // this.playerService.deletePlayer(player.id);
      button.setAttribute('data-target', '#deletePlayerModal');
    }
    container!.appendChild(button);
    button.click();
  }

  clickButton(path: string) {
        this.router.navigate([path]);
    }
 

  
  
}
