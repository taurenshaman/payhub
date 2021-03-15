"use strict";

import { DataService } from "../Tools";

export class ViewModelBase {
    app: Vue;
    api: DataService;

    constructor() {
        this.api = new DataService();
    }

}