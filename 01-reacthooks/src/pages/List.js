import React from 'react'
import { useHistory, useLocation, useRouteMatch, useParams } from 'react-router-dom'
export default function List(props) {
  console.log('props----', props)
  console.log('useHistory--', useHistory())
  console.log('useLocation--', useLocation())
  console.log('useRouteMatch--', useRouteMatch())
  console.log('useParams--', useParams())
  return (
    <div>
      List
    </div>
  )
}
