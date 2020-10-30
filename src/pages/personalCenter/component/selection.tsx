import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { AtCard, AtIcon }  from 'taro-ui'
import "taro-ui/dist/style/components/flex.scss";
import "taro-ui/dist/style/components/icon.scss"
import './selection.less'
import GoodsCard from '../../components/goodsCard'

const Selection: FC<any> = props => {
  const [List, setList]= useState([])

  return (
    <View className='row'>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
      <View className='col'>
        <GoodsCard />
      </View>
    </View>
  )
}
export default Selection
