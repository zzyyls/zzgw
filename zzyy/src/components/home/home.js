import Taro, { Component, render, requirePlugin } from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'
import './home.scss'


class Home extends Component {
    
    render() {
        return (
            <View className="home">
                <AtNoticebar marquee>
                    中泽医药招商热线： 176-1070-5501
                </AtNoticebar>

                <Swiper
                    className='test-h'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem>
                    <View className='demo-text-1'>1</View>
                    </SwiperItem>
                    <SwiperItem>
                    <View className='demo-text-2'>2</View>
                    </SwiperItem>
                    <SwiperItem>
                    <View className='demo-text-3'>3</View>
                    </SwiperItem>
                </Swiper>


                

  
                
            </View>
        )
    }
}

export default Home