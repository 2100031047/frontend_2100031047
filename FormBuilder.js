import React, { useState } from 'react';
import './FormBuilder.css';

const FormBuilder = () => {
  const [formName, setFormName] = useState('');
  const [formFields, setFormFields] = useState([]);

  // Function to add a new form field
  const addField = (type) => {
    setFormFields([...formFields, { id: Date.now(), type, label: '' }]);
  };

  // Function to remove a form field
  const removeField = (id) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  // Function to handle input change for field labels
  const handleLabelChange = (id, label) => {
    setFormFields(formFields.map(field => {
      if (field.id === id) {
        return {...field, label};
      }
      return field;
    }));
  };

  return (
    <div className="form-builder-container">
      <h2 className="form-builder-header">Form Builder</h2>
      <div className="form-name-container">
        <label htmlFor="form-name">Form Name:</label>
        <input 
          type="text" 
          id="form-name" 
          value={formName} 
          onChange={(e) => setFormName(e.target.value)} 
          placeholder="Enter form name" 
        />
      </div>
      <div className="add-field-buttons">
        <button onClick={() => addField('text')}>Add Text Input</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>
        <button onClick={() => addField('radio')}>Add Radio Button</button>
      </div>
      <form>
        {formFields.map((field) => (
          <div key={field.id} className="form-field">
            <label>
              <input 
                type="text" 
                placeholder="Enter field label" 
                value={field.label}
                onChange={(e) => handleLabelChange(field.id, e.target.value)}
              />
            </label>
            {field.type === 'text' && <input type="text" />}
            {field.type === 'checkbox' && <input type="checkbox" />}
            {field.type === 'radio' && <input type="radio" />}
            <button className="remove-field-button" onClick={() => removeField(field.id)}>Remove</button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
