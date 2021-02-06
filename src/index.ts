import express, { json } from 'express'
import { validateForm } from './models/form';
import { Field, validateField } from './models/field';
import { validateSubmission } from './models/submission';
import { uid } from 'uid';

const app = express()
const port = 5000

app.use(express.json()) // for parsing application/json


// todo: add permission checks 
// todo: add field validation

// Body parameters 
// - userId: string 
// - formData:{ 
//      creator_id: string,
//      org_id: string,
//      name: string,
//      description?: string,
//   }
// - fields : [ 
// { 
// type: string, // Possible values = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"]
// display_label: string,
// display_description: string,
// display_hint: string,
// placeholder?: string,
// default_value?: string,
// required: boolean,
// single_select_dropdown_options?: Array<string>,
// display_condition_groups?: Array<DisplayConditionGroup>,
//      } 
//  ]
app.all('/create-form', (req, res) => {
    const body = req.body;
    const formData = body.formData;
    const fieldsData = body.fieldsData;
    const userId = body.userId;

    const formId = uid();

    if (typeof userId !== "string") {
        res.status(400).send("Improperly formatted inputs. Provided userId: " + userId);
        return
    }

    if (!Array.isArray(fieldsData)) {
        res.status(400).send("Improperly formatted inputs. Provided fieldsData: " + JSON.stringify(fieldsData));
        return
    }

    const fields = fieldsData.map(x => {
        return {
            "id": uid(),
            "form_id": formId,
            ...x,
        }
    });
    // Maintains order that was given in "fields" body parameter 
    const fieldsDisplayOrder = fields.map(x => x.id);

    const form = {
        "id": formId,
        "creator_id": userId,
        "fields_display_order": fieldsDisplayOrder,
        ...formData,
        "fields": fields,
    }
    const formValidation = validateForm(form);
    if (!formValidation) {
        res.status(400).send("Improperly formatted inputs. Provided formData: " + JSON.stringify(formData) + " || form: " + JSON.stringify(form));
        return
    }

    // Future logic: 
    // - further checks based on field types (e.g. check if single select dropdown options are provided)
    // - insert form into database 

    res.status(200).send(form);
})

// Body parameters 
// - formId: string
// - userId: string 
app.all('/delete-form', (req, res) => {
    const body = req.body;
    const formId = body.formId;
    const userId = body.userId;

    const validateFormId = typeof formId === "string";
    const validateUserId = typeof userId === "string";

    if (!validateFormId || !validateUserId) {
        res.status(400).send("Improperly formatted inputs. Provided formId: " + JSON.stringify(formId) + ", userId: " + JSON.stringify(userId));
        return
    }

    // Future Logic: 
    // - ensure user has permission to delete this form 
    // - remove form object from database 

    res.status(200).send(body);
})


// Body parameters 
// - userId: string 
// - form:{ 
//      id: string, 
//      creator_id: string,
//      org_id: string,
//      name: string,
//      description?: string,
//      displayFieldOrder: Array<string> (array of field ids in desired display order)
//      fields: [ 
//          { 
//                id: string,
//                form_id: string,
//                type: string, // Possible values = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"]
//                display_label: string,
//                display_description: string,
//                display_hint: string,
//                placeholder?: string,
//                default_value?: string,
//                required: boolean,
//                single_select_dropdown_options?: Array<string>,
//                display_condition_groups?: Array<DisplayConditionGroup>,
//          }
//      ]
//   }
app.all('/update-form', (req, res) => {
    const body = req.body;
    const form = body.form;
    const userId = body.userId;

    const formValidation = validateForm(form);
    const userIdValidation = typeof userId === "string";
    if (!formValidation || !userIdValidation) {
        res.status(400).send("Form was improperly formatted. Provided inputs: userId: " + userId + ", form: " + JSON.stringify(form));
        return
    }

    // Future logic: 
    // - insert updated form into database 

    res.status(200).send(form);
})

// Body parameters 
// - userId: string 
// - submission: { 
    // id: string, 
    // form_id: string, 
    // timestamp: string, 
    // field_values: Array<FieldValue> 
// }
app.all('/submit-form', (req, res) => {
    const body = req.body;
    const submissionData = body.submissionData;

    const submission = {
        id: uid(),
        ...submissionData,
    };
    const submissionValidation = validateSubmission(submission);
    if (!submissionValidation) {
        res.status(400).send("Submission was improperly formatted. Provided submissionData: " + JSON.stringify(submissionData));
        return
    }

    // Future logic: 
    // - add submission into database 

    res.status(200).send(submission);
})

app.listen(port, () => console.log(`Running on port ${port}`))