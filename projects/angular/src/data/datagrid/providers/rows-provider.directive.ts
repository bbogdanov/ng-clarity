/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Host, Input } from '@angular/core';
import { ClrDatagrid } from '../datagrid';

@Directive({
  selector: '[clrRowProvider]',
  exportAs: 'clrRowsProvider',
})
export class ClrRowsProvider {
  public items: any[] = [];

  @Input()
  set clrRowProvider(items: any) {
    this._datagrid.items.all = items;
    this.items = items;
  }

  constructor(@Host() private _datagrid: ClrDatagrid) {
    this._datagrid.items.smartenUp();

    this._datagrid.items.change.subscribe(x => {
      console.log('change', x);
      this.items = x.slice();
    });
  }
}
