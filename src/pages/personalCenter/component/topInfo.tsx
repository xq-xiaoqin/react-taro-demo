import React, { FC, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabBar, AtAvatar }  from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/avatar.scss";
import './topInfo.less'

const TopInfo: FC<any> = props => {
  const [current, setCurrent]= useState(0)

  function handleClick (value) {
    setCurrent(value)
  }
  
  return (
    <View className='wrap'>
      <View className='user-wrap'>
        <View className='user-info'> 
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <View className='user-margin'> 
            <View className='name-size'>唯品会会员</View>
            <View className='account'>
              <Text className='mobil-size'>157****931 </Text>
              <Text className='switch-account'>切换账号</Text>
            </View>
          </View>
        </View>
        <View className='coupon'>
          $$ 签到领券
        </View>
      </View>
      <View className='collect-wrap'>
        <View>
          <View className='collect-num'>1</View>
          <View className='collect-title'>商品收藏</View>
        </View>
        <View>
          <View className='collect-num'> 11</View>
          <View className='collect-title'>品牌收藏</View>
        </View>
        <View>
          <View className='collect-num'>13</View>
          <View className='collect-title'>浏览足迹</View>
        </View>
      </View>
      <View className='vip-wrap'>
        <View className='vip-color'>超级VIP</View>
        <View className='vip-desc'>开通立享全年免邮</View>
      </View>
    </View>
  )
}
export default TopInfo
