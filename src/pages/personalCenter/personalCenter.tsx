import React, { FC, useEffect, useState } from 'react'
import { View, Swiper, SwiperItem, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import "taro-ui/dist/style/components/icon.scss";
import './personalCenter.less'
import TopInfo from './component/topInfo'
import Order from './component/order'
import More from './component/more'

const PersonalCenter: FC<any> = props => {
  const [current, setCurrent]= useState(0)

  
  return (
    <View className='personal-wrap'>
      <TopInfo  />
      <View>
        <AtIcon value='volume-minus' size='18'></AtIcon>
        <Swiper
          className='swiper-wrap'
          indicatorActiveColor='#333'
          vertical
          circular
          autoplay>
          <SwiperItem>
            <View>《唯品会隐私政策》变更公告 </View>
          </SwiperItem>
          <SwiperItem>
            <View>谨防假冒客服诈骗！学习安全小知识 </View>
          </SwiperItem>
        </Swiper>
      </View>
      <Order />
      <View className='record-wrap'>
        <View className='cashback-wrap'>
          <img style={{display: 'inline-block'}} src={require('../../static/money.png')} alt='' />
          <View style={{fontSize: '18px'}}>返现记录</View>
        </View>
        <View style={{fontSize: '14px'}}>点击查看</View>
      </View>
      <More />
      <View>coupon</View>
      <View>Selection of recommended</View>
    </View>
  )
}
export default PersonalCenter
