(function() {

    "use strict";

    function msg(message) {
        if (!message) { return ""; }
        return message + (/[.:!?]$/.test(message) ? " " : ": ");
    }

    function actualAndExpectedMessageValues(actual, expected, message) {
        return [actual, expected, msg(message)]
    }

    function hasProperty(actualValue, expectedValue) {
        if (expectedValue === undefined) {
            return actualValue !== undefined;
        }
        return actualValue == expectedValue;
    };

	buster.referee.add("containsElement", {
        assert: function ($tree, selector) {
            return $tree.find(selector).length > 0;
        },
        assertMessage: "${2}Expected [${0}] to contain html element ${1}",
        refuteMessage: "${2}Expected [${0}] not to html element contain ${1}",
        expectation: "toContainElement",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("haveText", {
        assert: function ($el, text) {
            return $el.html().indexOf(text) !== -1;
        },
        assertMessage: "${2}Expected [${0}] to have text ${1}",
        refuteMessage: "${2}Expected [${0}] not to have text ${1}",
        expectation: "toHaveText",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("isEmpty", {
        assert: function ($el) {
            return $el.is(':empty');
        },
        assertMessage: "${2}Expected [${0}] to be empty ${1}",
        refuteMessage: "${2}Expected [${0}] not to be empty ${1}",
        expectation: "toBeEmpty",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("exist", {
        assert: function ($el) {
            return $el.size() > 0;
        },
        assertMessage: "${2}Expected [${0}] to exist",
        refuteMessage: "${2}Expected [${0}] not to exist",
        expectation: "toExist",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("haveClass", {
        assert: function ($el, className) {
            return $el.hasClass(className);
        },
        assertMessage: "${2}Expected [${0}] to have class ${1}",
        refuteMessage: "${2}Expected [${0}] not to have class ${1}",
        expectation: "toHaveClass",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("haveValue", {
        assert: function ($el, value) {
            return $el.val() == value;
        },
        assertMessage: "${2}Expected [${0}] to have value ${1}",
        refuteMessage: "${2}Expected [${0}] not to have value ${1}",
        expectation: "toHaveValue",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("haveAttr", {
        assert: function ($el, attributeName, expectedAttributeValue) {
            return hasProperty($el.attr(attributeName), expectedAttributeValue);
        },
        assertMessage: "${2}Expected [${0}] to have attribute ${1} and ${2} value",
        refuteMessage: "${2}Expected [${0}] not to have attribute ${1} and ${2} value",
        expectation: "toHaveAttr",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("hidden", {
        assert: function ($el) {
            return $el.is(':hidden');
        },
        assertMessage: "${2}Expected [${0}] to be hidden",
        refuteMessage: "${2}Expected [${0}] not to be hidden",
        expectation: "toBeHidden",
        values: actualAndExpectedMessageValues
    });

	buster.referee.add("isPromise", {
		assert: function (value) {
			if (typeof value.then !== "function") {
				return false;
			}
			return String($.Deferred().then) === String(value.then);
		},
		assertMessage: "${2}Expected [${0}] to be a promise object",
		refuteMessage: "${2}Expected [${0}] not to be a promise object",
		expectation: "toBePromise",
		values: actualAndExpectedMessageValues
	});

	buster.referee.add("isJQuery", {
		assert: function (value) {
			return !!value.jquery;
		},
		assertMessage: "${2}Expected [${0}] to be a jQuery object",
		refuteMessage: "${2}Expected [${0}] not to be a jQuery object",
		expectation: "toBeJQuery",
		values: actualAndExpectedMessageValues
	});

	buster.referee.add("isJQueryElement", {
		assert: function ($el) {
			return !!($el.jquery && $el[0].tagName);
		},
		assertMessage: "${2}Expected [${0}] to be a jQuery Element",
		refuteMessage: "${2}Expected [${0}] not to be a jQuery Element",
		expectation: "toBeJQueryElement",
		values: actualAndExpectedMessageValues
	});

})();