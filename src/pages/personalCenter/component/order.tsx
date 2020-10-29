import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar, AtAvatar }  from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/avatar.scss";
import './order.less'

const Order: FC<any> = props => {
  const [current, setCurrent]= useState(0)

  function handleClick (value) {
    setCurrent(value)
  }
  
  return (
    <View>
      <AtTabBar
        selectedColor='unset'
        iconSize={28}
        tabList={[
          { title: '待付款', iconType: 'credit-card' },
          { title: '待收货', iconType: 'shopping-bag' },
          { title: '待评价', iconType: 'edit'},
          { title: '退换/售后', iconType: 'money'},
          { title: '全部订单', iconType: 'numbered-list'}
        ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}
export default Order
