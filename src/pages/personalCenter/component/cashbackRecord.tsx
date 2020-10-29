import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar, AtAvatar }  from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/flex.scss";
import './order.less'

const Order: FC<any> = props => {
  const [current, setCurrent]= useState(0)

  function handleClick (value) {
    setCurrent(value)
  }
  
  return (
    <View className='at-row at-row__justify--between'>
      <View className='at-col at-col-5'>
        <img src='../../../static/money.png' />
        返现记录
      </View>
      <View className='at-col at-col-5'>点击查看</View>
    </View>
  )
}
export default Order
