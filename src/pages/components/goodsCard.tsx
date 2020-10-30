import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { AtCard, AtIcon }  from 'taro-ui'
import "taro-ui/dist/style/components/flex.scss";
import "taro-ui/dist/style/components/icon.scss"
import './goodsCard.less'

const GoodsCard: FC<any> = props => {
  const [List, setList]= useState([])

  return (
    <View className='goods-wrap'>
      <View>
        <img src={require('../../static/mac.png')} style={{width: '100%'}} />
      </View>
      <View className='font_overflow'>
        MAC|魅可子弹头哑光口红多色可选 烂番茄/小辣椒
      </View>
      <View>
        <View className='tag_bg'>特价</View>
        <View className='price'> &yen;126</View>
        <View className='font-line'> &yen;170  7.5折</View>
      </View>
      <View>标签</View>
    </View>
  )
}
export default GoodsCard
