import React from 'react'
import Toolbar from './Toolbar'
import Events from './Events'
import Coursemology from './Coursemology'
import Zoom from './Zoom'
import Iframe from 'react-iframe'

export default function StudentHomePage() {
    return (
        <div>
            <Toolbar />
            <Events />
            <Coursemology />
            <Zoom />
        </div>
    )
}