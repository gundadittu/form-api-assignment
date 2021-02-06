"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSubmission = void 0;
const fieldValue_1 = require("./fieldValue");
function validateSubmission(arg) {
    if (!arg) {
        return false;
    }
    const validateId = typeof arg.id === "string";
    const validateFormId = typeof arg.form_id === "string";
    const timestamp = typeof arg.timestamp === "string";
    function validateAllFieldValues() {
        const fieldValues = arg.field_values;
        if (!fieldValues) {
            return false;
        }
        else if (!Array.isArray(fieldValues)) {
            return false;
        }
        const filteredFieldValues = fieldValues.filter((x, _1, _2) => fieldValue_1.validateFieldValue(x));
        return filteredFieldValues.length === fieldValues.length;
    }
    const validateFieldValues = validateAllFieldValues();
    return validateId && validateFormId
        && timestamp && validateFieldValues;
}
exports.validateSubmission = validateSubmission;
//# sourceMappingURL=submission.js.map