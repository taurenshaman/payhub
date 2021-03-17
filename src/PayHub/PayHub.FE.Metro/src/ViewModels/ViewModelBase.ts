"use strict";
import { DataService } from "../Tools";

export class ViewModelBase {
    app: any;
    api: DataService;

    constructor() {
        this.api = new DataService();
    }

}