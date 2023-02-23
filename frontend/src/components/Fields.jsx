import React from 'react'

export default function Fields() {
  return (
    <div>
      <input type='radio' id='easy' />
      <label htmlFor='easy'>Easy</label>
      <input type='radio' id='medium' />
      <label htmlFor='medium'>Medium</label>
      <input type='radio' id='hard' />
      <label htmlFor='hard'>Hard</label>
    </div>
  )
}
