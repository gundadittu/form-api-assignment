import { DisplayConditionGroup, validateDisplayConditionGroup } from './displayConditionGroup';

export type Field = {
    id: string,
    form_id: string,
    type: string, // Possible values = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"]
    display_label: string,
    display_description: string,
    display_hint: string,
    placeholder?: string,
    default_value?: string,
    required: boolean,
    single_select_dropdown_options?: Array<string>,
    accepted_file_types?: Array<string>, // Possible values = ["pdf", "word", "png", "jpeg", "ppt", "excel"]
    display_condition_groups?: Array<DisplayConditionGroup>,
}

export function validateField(arg: Field | any): arg is Field {
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
    const acceptedFileTypes = arg.accepted_file_types; 
    const validateAcceptedFileTypes = acceptedFileTypes ? Array.isArray(acceptedFileTypes) : true; 

    function validateAllDisplayConditionGroups(): boolean {
        const conditionGroups = arg.display_condition_groups;
        if (!conditionGroups) {
            return true; // since this is an optional value 
        } else if (!Array.isArray(conditionGroups)) {
            return false;
        }

        const filteredGroups = conditionGroups.filter((x, _1, _2) => validateDisplayConditionGroup(x));
        return filteredGroups.length === conditionGroups.length;
    }
    const validateDisplayConditionGroups = validateAllDisplayConditionGroups();

    return validateId && validateFormId && validateType && validateDisplayLabel
        && validateDisplayDescription && validateDisplayHint && validateAcceptedFileTypes
        && validateDefaultValue && validateRequired && validatePlaceholder
        && validateSingleSelectDropdownOptions && validateDisplayConditionGroups;
}