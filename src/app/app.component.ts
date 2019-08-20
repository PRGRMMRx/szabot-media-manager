import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  videos = [
    'MattGaddy\'s Stream Space',
    'The Midnight - Jason',
    'The Midnight - Gloria',
    'The Midnight - Light Years',
    'The Midnight - Crystalline'
  ];

  videoIds = [
    'csN0vkS8_cI',
    'KWoWSXzmDto',
    '18-Ye2L3ej8',
    'JcYVe5u1Cms',
    '3-II-NwKHeM'
  ];
  title = 'Szabot Media Manager';
  player: YT.Player;
  id: string = this.videoIds[0];
  playerVars = {
    cc_lang_pref: 'en'
  };
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.videos, event.previousIndex, event.currentIndex);
    moveItemInArray(this.videoIds, event.previousIndex, event.currentIndex);
    if (this.videoIds[0] != this.id) {
      this.id = this.videoIds[0];
      this.player.loadVideoById(this.id);
      
    }
  }
}
