import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IAudio} from "../../shared/audio/IAudio";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  @ViewChild('audioPlayer')
  audioPlayerRef!: ElementRef<HTMLAudioElement>;

  audioName: IAudio["name"] | null = null;
  audioFileName: IAudio["fileName"] | null = null;

  isPlaying: boolean = false;

  onClickAudioFromTable(audio: IAudio) {
    this.audioName = audio.name;
    this.audioFileName = audio.fileName;

    this.audioPlayerRef.nativeElement.src = "assets/audios/" + this.audioFileName;
    this.isPlaying = false;
    this.audioPlayerRef.nativeElement.pause();
  }

  onClickTogglePlay(): void {
    if (this.isPlaying) this.audioPlayerRef.nativeElement.pause();
    if (!this.isPlaying) {
      this.audioPlayerRef.nativeElement.play();
      this.audioPlayerRef.nativeElement.volume = 0.3;
    }
    this.isPlaying = ! this.isPlaying;
  }
}
