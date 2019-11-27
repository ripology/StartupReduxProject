import React, {useEffect} from 'react'
import Startup from './Startup'
import {useDispatch} from 'react-redux'
import {getToDoListFromAPI} from '../Actions'
import Startups from '../Reducers/Startups';

const StartupList = ({ Startup, onStartupClick  }) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getToDoListFromAPI(10))
  }, [dispatch])

  return (
    <ul>
      {Startups.map((startup, index) => (
        <Startup key={index} {...startup} onClick={() => onStartupClick(index)}  />
      ))}
    </ul>
  )
}

export default StartupList