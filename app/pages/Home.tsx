import { CardHoverEffectDemo } from '@/components/HomeComponents/CardSection'
import FrontPageSection from '@/components/HomeComponents/FrontPageSection'
import React from 'react'

const Home = () => {
  return (



    <div style={styles.pageWrapper}>
        <FrontPageSection/>
        <CardHoverEffectDemo/>


    </div>
  )
}

export default Home

const styles={
    pageWrapper:{
        backgroundColor:"black",
        height:"screen",
        flex:1,
        align:"center",
        

    }


}