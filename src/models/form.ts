import { Field, validateField } from './field';

export type Form = {
    id: string,
    creator_id: string,
    org_id: string,
    name: string,
    description?: string,
    fields_display_order: Array<string>,
    fields: Array<Field>,
}


export function validateForm(arg: Form | any): arg is Field {
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

    function validateAllFields(): boolean {
        const fields = arg.fields;
        if (!fields) {
            return false;
        } else if (!Array.isArray(fields)) {
            return false;
        }

        const filteredFields = fields.filter((x, _1, _2) => validateField(x));
        return filteredFields.length === fields.length;
    }
    const validateFields = validateAllFields()

    console.log("validateForm returning" + validateId + " " + validateCreatorId
        + " " + validateOrgId + " " + validateName
        + " " + validateDescription + " " + validateFields
        + " " + validateDisplayFieldOrder);

    return validateId && validateCreatorId
        && validateOrgId && validateName
        && validateDescription && validateFields
        && validateDisplayFieldOrder;
}