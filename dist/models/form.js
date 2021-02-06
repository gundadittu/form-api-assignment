"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const field_1 = require("./field");
function validateForm(arg) {
    if (!arg) {
        return false;
    }
    const validateId = typeof arg.id === "string";
    const validateCreatorId = typeof arg.creator_id === "string";
    const validateOrgId = typeof arg.org_id === "string";
    const validateName = typeof arg.name === "string";
    const validateDescription = typeof arg.description === "string";
    const fieldsDisplayOrder = arg.fields_display_order;
    var validateDisplayFieldOrder = Array.isArray(fieldsDisplayOrder);
    if (validateDisplayFieldOrder) {
        validateDisplayFieldOrder = fieldsDisplayOrder.length > 0 ? typeof fieldsDisplayOrder[0] === "string" : true;
    }
    function validateAllFields() {
        const fields = arg.fields;
        if (!fields) {
            return false;
        }
        else if (!Array.isArray(fields)) {
            return false;
        }
        const filteredFields = fields.filter((x, _1, _2) => field_1.validateField(x));
        return filteredFields.length === fields.length;
    }
    const validateFields = validateAllFields();
    console.log("validateForm returning" + validateId + " " + validateCreatorId
        + " " + validateOrgId + " " + validateName
        + " " + validateDescription + " " + validateFields
        + " " + validateDisplayFieldOrder);
    return validateId && validateCreatorId
        && validateOrgId && validateName
        && validateDescription && validateFields
        && validateDisplayFieldOrder;
}
exports.validateForm = validateForm;
//# sourceMappingURL=form.js.map