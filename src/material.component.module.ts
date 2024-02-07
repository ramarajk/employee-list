import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatGridListModule } from '@angular/material/grid-list'
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
    declarations: [],
    imports: [
        MatGridListModule,
        MatTableModule,
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatSortModule
    ],
    exports: [
        MatGridListModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatSortModule
    ]
})
export class MaterialComponentsModule { }
