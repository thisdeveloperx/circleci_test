import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  min = 60;

  max = 600;

  step = 10;

  width = 100;

  startX: number;

  offsetValue = 0;

  get colWidth(): string {
    return `${this.width}px`;
  }

  isActive = false;

  rangeEl;

  columnEl;

  @ViewChild('range')
  set slider(v) {
    setTimeout(() => {
      this.rangeEl = v.nativeElement;
     }, 0);
  }

  @ViewChild('column')
  set column(v) {
    setTimeout(() => {
      this.columnEl = v.nativeElement;
     }, 0);
  }



  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // setTableSize(e) {
  //   this.colWidth = `${this.width}px`;
  // }

  onMouseUp = (e) => {
    console.log(e);
    this.isActive = false;
    const width  = e.pageX - this.startX;
    this.columnEl.width = width;
    // this.width+= width;
    this.offsetValue = 0;
    // this.cd.detectChanges();
  }

  onMouseDown = (e) => {
    this.isActive = true;
    this.startX = e.pageX;
  }

  onMouseMove = (e) => {
    if (this.isActive) {
      const width  = e.pageX - this.startX;
      this.offsetValue = width < 0 ? 0 : width;
      // this.width+= width;
      // this.cd.detectChanges();
    }
  }

  onChange(e) {
    this.columnEl.width = `${e.target.value}px`;
  }

}
