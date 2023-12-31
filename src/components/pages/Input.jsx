import React from 'react'

export default function Input({type="text",id,name,title,value,onChange,errors,onBlur,touched}) {
  return (
    <>
    <div className='input-group mb-3'>
    <input  type={type} name={name} id={id} placeholder={title} className='form-control input-field' value={value} onChange={onChange} onBlur={onBlur} touched={touched}/>
    {touched[name] && errors[name] && <p className='text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}