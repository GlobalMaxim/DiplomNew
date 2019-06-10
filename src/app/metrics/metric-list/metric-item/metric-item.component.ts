import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatIconModule, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-metric-item',
  templateUrl: './metric-item.component.html',
  styleUrls: ['./metric-item.component.scss']
})

export class MetricItemComponent implements OnInit {

  constructor() { }
  metricList: MatTableDataSource<any>;
  displayedColumns: string[] = ['metricName', 'metricDesc', 'metricValue', 'lowerBorder', 'upperBorder']
  ngOnInit() {
  }

}
