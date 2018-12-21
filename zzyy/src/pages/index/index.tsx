import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTabBar }  from 'taro-ui'
import Home from '../../components/home/home'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
          <Home />
          <View className="Copyright">Copyright © 2019 中泽医药 Inc. 保留所有权利。</View>
          <AtTabBar
            fixed
            tabList={[
              { title: '首页', iconType: 'home', text: 'new' },
              { title: '新闻', iconType: 'list' },
              { title: '我的', iconType: 'user' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
      </View>
    )
  }
}

