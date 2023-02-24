import React from 'react'

export default function Fields() {
  return (
    <div className='container flex gap-10'>
      <h2 className='font-bold'>Settings:</h2>
      <div>
        <ul>
          <li>
            <input type='radio' id='easy' name='difficulty' className='mr-1' />
            <label htmlFor='easy'>Easy</label>
          </li>
          <li>
            <input
              type='radio'
              id='medium'
              name='difficulty'
              className='mr-1'
            />
            <label htmlFor='medium'>Medium</label>
          </li>
          <li>
            <input type='radio' id='hard' name='difficulty' className='mr-1' />
            <label htmlFor='hard'>Hard</label>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <input
              type='radio'
              id='underground'
              name='underground'
              className='mr-1'
            />
            <label htmlFor='underground'>Underground</label>
          </li>
          <li>
            <input type='radio' id='indie' name='indie' className='mr-1' />
            <label htmlFor='indie'>Indie</label>
          </li>
          <li>
            <input
              type='radio'
              id='mainstream'
              name='mainstream'
              className='mr-1'
            />
            <label htmlFor='mainstream'>Mainstream</label>
          </li>
        </ul>
      </div>
    </div>
  )
}
