import React from 'react';

// props added by Field component
// two level destructuring saying: look at the prop 'meta' and bring those to props
export default ({ change, input, label, meta: { error, touched } }) => {
  const onInputChange = (event) => {
    const number = Math.abs(Math.floor(event.target.value));
    change('quantity', number);
  }

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <label htmlFor='quantity'>{label}</label>
      <input 
        {...input} 
        onChange={(event) => onInputChange(event)} 
        type={'number'} 
        style={{ marginBottom: '5px' }} 
      />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};