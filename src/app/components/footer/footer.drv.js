/*
 Created by bnaya on 23/10/16,
 @Component Name: footer.drv
 @Description:
 @Params: 
 @Return: 
 @Methods: 
*/

import './footer.less';

export default angular.module('app.components.footer', [])
    .component('footer', footerConfig);

const template = require('./footer.tpl.html');

function footerConfig() {
    return {
        restrict: 'E',
        bindings: {},
        template,
        controller: footerController,
        controllerAs: 'vm'
    }
}

class footerController {
    constructor() {
        console.log(`I'm footer :]`);
    }
}