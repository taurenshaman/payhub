"use strict";

class ViewModelBase {
    app: Vue;
    api: DataService;

    constructor() {
        this.api = new DataService();
    }

}