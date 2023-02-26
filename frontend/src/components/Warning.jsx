import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'
import { pa_warning } from '../assets'

export default function Warning() {
  return (
    <div className='w-screen flex h-screen items-center justify-center font-Poppins'>
      <div className='container flex h-70 justify-center mx-auto items-center rounded-xl shadow-xl gap-5 max-w-lg p-10 space-y-10 '>
        <img className='w-28' src={pa_warning} />
        <div>
          <h1 className='text-xl font-bold'>Warning</h1>
          <p className='text-slate-500 text-sm '>
            As the rawest musical genre ever materialized, Rap may contain
            language deemed inappropriate for younger audiences. Only click
            'okay' if you're sure, and young ones 'scatter' like a glass jaw,
            and break it.
          </p>
          <div className='container flex gap-5 justify-center mt-5'>
            <Link
              to={'main'}
              className='border border-slate-200  rounded-lg p-2 px-5 hover:bg-slate-100/50 hover:border-slate-100/50'
            >
              Okay!
            </Link>
            <Link
              to='http://google.com'
              className='border border-slate-200  rounded-lg p-2 px-5 hover:bg-slate-100/50 hover:border-slate-100/50'
            >
              Scatter!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
