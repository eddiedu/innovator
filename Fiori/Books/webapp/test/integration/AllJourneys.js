jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 books in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"innovator/books/Books/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"innovator/books/Books/test/integration/pages/App",
	"innovator/books/Books/test/integration/pages/Browser",
	"innovator/books/Books/test/integration/pages/Master",
	"innovator/books/Books/test/integration/pages/Detail",
	"innovator/books/Books/test/integration/pages/Create",
	"innovator/books/Books/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "innovator.books.Books.view."
	});

	sap.ui.require([
		"innovator/books/Books/test/integration/MasterJourney",
		"innovator/books/Books/test/integration/NavigationJourney",
		"innovator/books/Books/test/integration/NotFoundJourney",
		"innovator/books/Books/test/integration/BusyJourney",
		"innovator/books/Books/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});