import React from 'react'
import { FrontPageText } from './FrontPageText'

const FrontPageSection = () => {
  return (
    <div style={styles.pageWrapper}>
    <FrontPageText/>


    </div>
  )
}

export default FrontPageSection

const styles={
    pageWrapper:{
        flex: 1,
        height:"full",
        width:"50%",
        alignItems:"center"
    }


}