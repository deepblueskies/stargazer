/* global angular */

import 'ionic-sdk/release/js/ionic.bundle';

import './components/receive.component.js';
import './components/send.component.js';
import './components/transaction.component.js';

import './directives/qrcode.directive.js';

import './modals/add-contact.controller.js';
import './modals/edit-txcomment.controller.js';
import './modals/payment-request.controller.js';

import routes from './config.route.js';

angular.module('app.account', [
	'app.component.receive',
	'app.component.send',
	'app.component.transaction',
	'app.directive.qrcode',
	'app.modal.add-contact-from-tx',
	'app.modal.edit-txcomment',
	'app.modal.payment-request'
])
.config(routes);
