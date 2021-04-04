import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import './App.css'

const Home = () => {
  const history = useHistory()
  const getData = async () => {
    const data = await axios.get('/api/questions')
    console.log(data)
  }
  const getLog = async () => {
    const logdata = await axios.get('/account/logstatus')
    console.log(logdata.data.user)
  }
  const logout = async () => {
    await axios.post('/account/logout')
    history.push('/login')
  }
  getData()
  return (
    <>
      <h1 style={{ paddingBottom: 5, paddingTop: 5 }}>
        CampusWire Lite
      </h1>
      <div className="floatcontain">
        <div id="floatLeft">
          <div className="element">
            Hello
          </div>
        </div>
        <div id="floatRight">
          <div className="element">
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
