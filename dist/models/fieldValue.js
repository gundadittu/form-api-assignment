"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFieldValue = void 0;
function validateFieldValue(arg) {
    if (!arg) {
        return false;
    }
    const validateSelectedValue = typeof arg.selected_value === "string";
    const validateSourceFieldId = typeof arg.source_field_id === "string";
    const validateSourceFieldType = typeof arg.source_field_type === "string";
    return validateSelectedValue && validateSourceFieldId && validateSourceFieldType;
}
exports.validateFieldValue = validateFieldValue;
//# sourceMappingURL=fieldValue.js.map