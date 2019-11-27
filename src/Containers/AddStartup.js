import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStartup } from '../Actions'

const AddStartup = ({ dispatch }) => {
  const [inputCompanyName, setInputCompanyName] = useState('')
  console.log('adding a startup');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          dispatch(addStartup(inputCompanyName))
          setInputCompanyName('')
        }}
      >
        <input
          value={inputCompanyName}
          onChange={e => setInputCompanyName(e.target.value)}
          placeholder="Add a startup"
        />
        <button disabled={!inputCompanyName.length} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddStartup)