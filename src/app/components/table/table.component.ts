import {Component, EventEmitter, Output} from '@angular/core';
import {IAudio} from "../../shared/audio/IAudio";
import {AUDIO_MOCKS, COLUMNS_AUDIO} from "../../shared/audio/audio-mocks";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   displayedColumns: string[] = COLUMNS_AUDIO;
   dataSource: IAudio[] = AUDIO_MOCKS;

  @Output()
  onClickRow = new EventEmitter<IAudio>();

  onClickRowFromTable(row: IAudio): void {
    this.onClickRow.emit(row);
  }
}
