import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='João' ></Member>
        <Member name='Maria' ></Member>
        <Member name='Jose' ></Member>
        <Member name='Pedro' ></Member>
    </Family>
    , document.getElementById('app')
)

