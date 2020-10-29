import React, { FC, useEffect, useState } from 'react'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/tab-bar.scss";
import './index.less'

import Home from '../home/home'
import Category from '../category/category'
import PersonalCenter from '../personalCenter/personalCenter'
import Car from '../car/car'

const Index: FC<any> = props => {
  const [current, setCurrent]= useState(0)

  function handleClick (value) {
    setCurrent(value)
  }

  useEffect(()=>{
    switch (current) {
      case 0:
        Taro.redirectTo({
          url: '/pages/home/home'
        })
        break;
      case 1:
        Taro.redirectTo({
          url: '/pages/category/category'
        })
        break;
      case 2:
        Taro.redirectTo({
          url: '/pages/car/car.tsx'
        })
        break;
      case 3:
        Taro.redirectTo({
          url: '/pages/personalCenter/personalCenter'
        })
        break;
      default:
        break;
    }
  },[current])

  return (
    <View>
      <View>
        {
          current === 0 && <Home />     ||
          current === 1 && <Category /> ||
          current === 2 && <Car />      ||
          current === 3 && <PersonalCenter /> 
        }
      </View>
      <AtTabBar
        fixed
        backgroundColor='#ececec'
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '分类', iconType: 'list' },
          { title: '购物车', iconType: 'shopping-cart'},
          { title: '个人中心', iconType: 'user'}
        ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}
export default Index
