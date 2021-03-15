"use strict";

//import PWCore from './core';

import * as core from './Core';
// export {core};

// export * from './Extensions';
// export * from './Impl';
import * as models from './Models';
// export {models};

import * as tools from './Tools';
// export {tools};

import * as viewmodels from './ViewModels';
// export {viewmodels};

import * as settings from './AppSettings';
// export {settings};

//export default PWCore;
const PayHub = {
    Core: core,
    Models: models,
    Tools: tools,
    ViewModels: viewmodels,
    Settings: settings
}

export default PayHub;