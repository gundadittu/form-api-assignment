"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateField = void 0;
const displayConditionGroup_1 = require("./displayConditionGroup");
function validateField(arg) {
    if (!arg) {
        return false;
    }
    const validateId = typeof arg.id === "string";
    const validateFormId = typeof arg.form_id === "string";
    const validateType = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"].includes(arg.type);
    const validateDisplayLabel = typeof arg.display_label === "string";
    const validateDisplayDescription = typeof arg.display_description === "string";
    const validateDisplayHint = typeof arg.display_hint === "string";
    const validateRequired = typeof arg.required === "boolean";
    // optional parameters 
    const validatePlaceholder = (arg.placeholder) ? typeof arg.placeholder === "string" : true;
    const validateSingleSelectDropdownOptions = (arg.type === "single-select-dropdown") ? Array.isArray(arg.single_select_dropdown_options) : true;
    const validateDefaultValue = (arg.default_value) ? typeof arg.default_value === "string" : true;
    function validateAllDisplayConditionGroups() {
        const conditionGroups = arg.display_condition_groups;
        if (!conditionGroups) {
            return true; // since this is an optional value 
        }
        else if (!Array.isArray(conditionGroups)) {
            return false;
        }
        const filteredGroups = conditionGroups.filter((x, _1, _2) => displayConditionGroup_1.validateDisplayConditionGroup(x));
        return filteredGroups.length === conditionGroups.length;
    }
    const validateDisplayConditionGroups = validateAllDisplayConditionGroups();
    console.log("validateField returning: " + validateId + " " +
        validateFormId + " " + validateType + " " + validateDisplayLabel
        + " " + validateDisplayDescription + " " + validateDisplayHint
        + " " + validateDefaultValue + " " + validateRequired + " " + validatePlaceholder
        + " " + validateSingleSelectDropdownOptions + " " + validateDisplayConditionGroups);
    return validateId && validateFormId && validateType && validateDisplayLabel
        && validateDisplayDescription && validateDisplayHint
        && validateDefaultValue && validateRequired && validatePlaceholder
        && validateSingleSelectDropdownOptions && validateDisplayConditionGroups;
}
exports.validateField = validateField;
//# sourceMappingURL=field.js.map