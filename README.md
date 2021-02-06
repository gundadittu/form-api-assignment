# Start server locally: 
- cd into root directory
- npm run dev 

# Test curl command for "/create-form" endpoint:

curl --header "Content-Type: application/json" \
  --data '{"formData": { "creator_id": "dummy-creator-id", "org_id": "dummy-org-id", "name": "dummy-name", "description": "dummy-description"}, "fieldsData": [{"type": "plain-text", "display_label": "dummy-display-label-1", "display_description": "dummy-display-description-1", "display_hint": "dummy-display-hint-1", "placeholder": "dummy-placeholder-1", "required": true}, {"type": "email-text", "display_label": "dummy-display-label-2", "display_description": "dummy-display-description-2", "display_hint": "dummy-display-hint-2", "placeholder": "dummy-placeholder-2", "required": true}, 
{"type": "single-select-dropdown", "display_label": "dummy-display-label-3", "display_description": "dummy-display-description-3", "display_hint": "dummy-display-hint-3", "placeholder": "dummy-placeholder-3", "single_select_dropdown_options": ["option-1", "option-2", "option-3"], "required": true}, 
{"type": "boolean", "display_label": "dummy-display-label-4", "display_description": "dummy-display-description-4", "display_hint": "dummy-display-hint-4", "placeholder": "dummy-placeholder-4", "required": true}, 
{"type": "file", "display_label": "dummy-display-label-5", "display_description": "dummy-display-description-5", "display_hint": "dummy-display-hint-5", "placeholder": "dummy-placeholder-5", "required": true}], "userId": "dummy-user-id"}' \
  http://localhost:5000/create-form 

# Test curl command for "/create-form" endpoint (with conditional fields):

curl --header "Content-Type: application/json" \
  --data '{"formData": { "creator_id": "dummy-creator-id", "org_id": "dummy-org-id", "name": "dummy-name", "description": "dummy-description"}, "fieldsData": [{"type": "plain-text", "display_label": "dummy-display-label-1", "display_description": "dummy-display-description-1", "display_hint": "dummy-display-hint-1", "placeholder": "dummy-placeholder-1", "required": true}, {"type": "email-text", "display_label": "dummy-display-label-2", "display_description": "dummy-display-description-2", "display_hint": "dummy-display-hint-2", "placeholder": "dummy-placeholder-2", "required": true}, 
{"type": "single-select-dropdown", "display_label": "dummy-display-label-3", "display_description": "dummy-display-description-3", "display_hint": "dummy-display-hint-3", "placeholder": "dummy-placeholder-3", "single_select_dropdown_options": ["option-1", "option-2", "option-3"], "required": true, "display_condition_groups": [ { "condition_list": [{"type": "exists", "trigger_field_id": "field-1-id", "trigger_field_type": "plain-text"},{"type": "value", "trigger_field_id": "field-3-id", "trigger_field_type": "single-select-dropdown", "trigger_field_value": "option-1"}]}]},{"type": "boolean", "display_label": "dummy-display-label-4", "display_description": "dummy-display-description-4", "display_hint": "dummy-display-hint-4", "placeholder": "dummy-placeholder-4", "required": true}, 
{"type": "file", "display_label": "dummy-display-label-5", "display_description": "dummy-display-description-5", "display_hint": "dummy-display-hint-5", "placeholder": "dummy-placeholder-5", "required": true}], "userId": "dummy-user-id"}' \
  http://localhost:5000/create-form 

# Test curl command for "/update-form" endpoint:

curl --header "Content-Type: application/json" \
  --data '{"form": { "id": "dummy-form-id", "creator_id": "dummy-creator-id", "org_id": "dummy-org-id", "name": "dummy-name", "description": "dummy-description", "fields_display_order":["field-1-id", "field-2-id", "field-3-id", "field-4-id", "field-5-id"] , "fields": [{"id": "field-1-id", "form_id": "dummy-form-id", "type": "plain-text", "display_label": "dummy-display-label-1", "display_description": "dummy-display-description-1", "display_hint": "dummy-display-hint-1", "placeholder": "dummy-placeholder-1", "required": true}, {"id": "field-2-id", "form_id": "dummy-form-id", "type": "email-text", "display_label": "dummy-display-label-2", "display_description": "dummy-display-description-2", "display_hint": "dummy-display-hint-2", "placeholder": "dummy-placeholder-2", "required": true}, 
{"id": "field-3-id", "form_id": "dummy-form-id", "type": "single-select-dropdown", "display_label": "dummy-display-label-3", "display_description": "dummy-display-description-3", "display_hint": "dummy-display-hint-3", "placeholder": "dummy-placeholder-3", "single_select_dropdown_options": ["option-1", "option-2", "option-3"], "required": true}, 
{"id": "field-4-id", "form_id": "dummy-form-id", "type": "boolean", "display_label": "dummy-display-label-4", "display_description": "dummy-display-description-4", "display_hint": "dummy-display-hint-4", "placeholder": "dummy-placeholder-4", "required": true}, 
{"id": "field-5-id", "form_id": "dummy-form-id", "type": "file", "display_label": "dummy-display-label-5", "display_description": "dummy-display-description-5", "display_hint": "dummy-display-hint-5", "placeholder": "dummy-placeholder-5", "required": true}]}, "userId": "dummy-user-id"}' \
  http://localhost:5000/update-form 


# Test curl command for "/submit-form" endpoint:

curl --header "Content-Type: application/json" \
  --data '{"submissionData": { "form_id": "dummy-form-id", "timestamp": "dummy-timestamp", "field_values" : [{"source_field_id": "field-1-id", "source_field_type": "plain-text", "selected_value": "dummy-text-input"},{"source_field_id": "field-2-id", "source_field_type": "email-text", "selected_value": "dummy-email-input"},{"source_field_id": "field-3-id", "source_field_type": "single-select-dropdown", "selected_value": "dummy-dropdown-value"},{"source_field_id": "field-4-id", "source_field_type": "boolean", "selected_value": "dummy-boolean-string"},{"source_field_id": "field-5-id", "source_field_type": "file", "selected_value": "dummy-file-url"}]}}' \
  http://localhost:5000/submit-form 