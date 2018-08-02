jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"innovator/books/Books/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"innovator/books/Books/test/integration/pages/App",
	"innovator/books/Books/test/integration/pages/Browser",
	"innovator/books/Books/test/integration/pages/Master",
	"innovator/books/Books/test/integration/pages/Detail",
	"innovator/books/Books/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "innovator.books.Books.view."
	});

	sap.ui.require([
		"innovator/books/Books/test/integration/NavigationJourneyPhone",
		"innovator/books/Books/test/integration/NotFoundJourneyPhone",
		"innovator/books/Books/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});