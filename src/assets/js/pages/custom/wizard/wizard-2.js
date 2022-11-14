"use strict";

// Class definition
var KTWizard2 = function () {
	// Base elements
	var _wizardEl;
	var _wizard;
	var _validations = [];

	// Private functions
	var initWizard = function () {
		// Initialize form wizard
		_wizard = new KTWizard(_wizardEl, {
			startStep: 1, // initial active step number
			clickableSteps: false // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
		});


		// Change event
		_wizard.on('change', function (wizard) {
			KTUtil.scrollTop();
		});
	}


	return {
		// public functions
		init: function () {
			_wizardEl = KTUtil.getById('kt_wizard_v2');

			initWizard();
		}
	};
}();

jQuery(document).ready(function () {
	KTWizard2.init();
});
