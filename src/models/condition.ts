import { Field, validateField } from './field';

export type Condition = {
    type: string, // Possible values = ["exists", "value"]
    trigger_field_id: Field,
    trigger_field_type: string, // Possible values = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"]
    trigger_field_value?: string,  // Required if type == "value"
}

export function validateCondition(arg: Condition | any): arg is Condition {
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