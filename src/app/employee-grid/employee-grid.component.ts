import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialComponentsModule } from '../../material.component.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { tableClass } from '../../models/tableClass';
import { callMiddlewareService } from '../../services/callMiddleware'
import { NgFor, NgForOf } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-employee-grid',
  standalone: true,
  imports: [MatCardModule, MatTableModule, NgForOf, NgFor, MatPaginator, MatGridList, MatGridTile],
  templateUrl: './employee-grid.component.html',
  styleUrl: './employee-grid.component.css'
})
export class EmployeeGridComponent implements AfterViewInit, OnInit {
  hundredData: tableClass[] = [];
  displayedColumns: string[] = ['createdAt', 'name', 'avatar', 'id'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: callMiddlewareService) { }

  ngOnInit(): void {
    this.retrieveHundredData();
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  retrieveHundredData(): any {
    this.service.callMiddlewareService().subscribe({
      next: (result) => {
        this.hundredData = result;
        this.dataSource = new MatTableDataSource<tableClass>(this.hundredData);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => { console.log("An error occurred"); console.error(error) },
      complete: () => console.info("completed")
    })
  }
}
