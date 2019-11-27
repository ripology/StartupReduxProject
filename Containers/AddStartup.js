import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStartup } from '../../Actions'

const AddStartup = ({ dispatch }) => {
  const [inputTextValue, setInputTextValue] = useState('')

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          dispatch(addStartup(inputTextValue))
          setInputTextValue('')
        }}
      >
        <input
          value={inputTextValue}
          onChange={e => setInputTextValue(e.target.value)}
          placeholder="what todo?"
        />
        <button disabled={!inputTextValue.length} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddStartup)