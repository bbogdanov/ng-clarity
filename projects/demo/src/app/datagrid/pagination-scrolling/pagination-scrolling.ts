/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';

import { Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-pagination-test-demo',
  providers: [Inventory],
  templateUrl: 'pagination-scrolling.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridPaginationScrollingDemo {
  @ViewChild(ClrDatagrid)
  datagrid: ClrDatagrid;

  users: User[];

  constructor(inventory: Inventory, private cdr: ChangeDetectorRef) {
    inventory.size = 50000;
    inventory.reset();
    this.users = inventory.all;
  }

  get console() {
    return {
      log: asdf => {
        console.log(asdf);
      },
    };
  }
}
