import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Coursemology from './Coursemology'
import Zoom from './Zoom'
import Forms from './Forms'

export default function AdminHomePage() {
    return (
        <div style={{ width: '100%' }}>
            <Toolbar />
            <Coursemology />
            <Forms />
            <Zoom />
        </div>
    )
}