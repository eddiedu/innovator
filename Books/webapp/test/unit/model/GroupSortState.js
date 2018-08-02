sap.ui.define([
	"innovator/books/Books/model/GroupSortState",
	"sap/ui/model/json/JSONModel",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function () {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("ISBN").length, 1, "The sorting by ISBN returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("BookTitle").length, 1, "The sorting by BookTitle returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("ISBN").length, 1, "The group by ISBN returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});

	QUnit.test("Should set the sorting to ISBN if the user groupes by ISBN", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("ISBN");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "ISBN", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by BookTitle and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "ISBN");

		this.oGroupSortState.sort("BookTitle");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});