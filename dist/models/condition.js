"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCondition = void 0;
function validateCondition(arg) {
    if (!arg) {
        return false;
    }
    const validateTriggerFieldId = typeof arg.trigger_field_id === "string";
    const validateTriggerFieldType = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"].includes(arg.trigger_field_type);
    const validateType = ["exists", "value"].includes(arg.type);
    const validateTriggerValue = (arg.type === "value") ? typeof arg.trigger_field_value === "string" : true;
    return validateTriggerFieldId && validateTriggerFieldType
        && validateType && validateTriggerValue;
}
exports.validateCondition = validateCondition;
//# sourceMappingURL=condition.js.map