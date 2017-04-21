import React, { Component, PropTypes } from 'react'
import AppIntro from 'react-native-app-intro'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions, 
  Platform } from 'react-native'
import styles, { width, height } from './style'

const slideSize = Platform.OS === 'android' ? { width, height } : null

export default class IntroContainer extends Component {
  static propTypes = {
    onSkipBtnClick: PropTypes.func,
    onDoneBtnClick: PropTypes.func,
    skipBtnLabel: PropTypes.string,
    doneBtnLabel: PropTypes.string
  }

  static defaultProps = {
    onSkipBtnClick: () => null,
    onDoneBtnClick: () => null,
    skipBtnLabel: 'Skip',
    doneBtnLabel: 'Done'
  }

  render () {
    const { onDoneBtnClick, onSkipBtnClick, doneBtnLabel, skipBtnLabel } = this.props
    const levelStyle = { ...slideSize, position: 'absolute' }
    return (
      <AppIntro
        onSkipBtnClick={onSkipBtnClick}
        onDoneBtnClick={onDoneBtnClick}
        skipBtnLabel={skipBtnLabel}
        doneBtnLabel={doneBtnLabel} >
        {/* Page 1 */}
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View style={[styles.header, Platform.OS === 'android' ? { width } : null]}>
            <View>
              <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('./img/page1/c1.png')} />
            </View>
            <View style={{ ...levelStyle, top: 80, left: Platform.OS === 'android' ? 36 : -20 }} level={20} >
              <Image style={{ width: 46 * 2.5, height: 28 * 2.5 }} source={require('./img/page1/c2.png')} />
            </View>
            <View style={{ ...levelStyle, top: 23, left: Platform.OS === 'android' ? 31 : -25 }} level={20} >
              <Image style={{ width: 109 * 2.5, height: 68 * 2.5 }} source={require('./img/page1/c5.png')} />
            </View>
            <View style={{ ...levelStyle, top: 65, left: Platform.OS === 'android' ? 41 : -15 }} level={5} >
              <Image style={{ width: 23 * 2.5, height: 17 * 2.5 }} source={require('./img/page1/c3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>AppIntro</Text></View>
            <View level={15}><Text style={styles.description}>Pretty Simple Useful in your app tour!</Text></View>
          </View>
        </View>
        {/* Page 2 */}
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View style={[styles.header, Platform.OS === 'android' ? { width } : null]}>
            <View>
              <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('./img/page2/1.png')} />
            </View>
            <View style={{ ...levelStyle, top: 30, left: Platform.OS === 'android' ? 45 : -10 }} level={20} >
              <Image style={{ width: 101 * 2.5, height: 71 * 2.5 }} source={require('./img/page2/2.png')} />
            </View>
            <View style={{ ...levelStyle, top: 10, left: Platform.OS === 'android' ? 55 : 0 }} level={-20} >
              <Image style={{ width: 85 * 2.5, height: 73 * 2.5 }} source={require('./img/page2/3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Title!</Text></View>
            <View level={15}><Text style={styles.description}>description!</Text></View>
          </View>
        </View>
        {/* Page 3 */}
        <View style={[styles.slide, { backgroundColor: '#406E9F' }]}>
          <View style={[styles.header, Platform.OS === 'android' ? { width } : null]}>
            <View style={{ ...levelStyle, top: 20,left: Platform.OS === 'android' ? 14 : -30 }} >
              <Image style={{ width: 138 * 2.5, height: 83 * 2.5 }} source={require('./img/page3/3.png')} />
            </View>
            <View style={{ ...levelStyle, top: 25, left: Platform.OS === 'android' ? 34 : -10 }} level={-15} >
              <Image style={{ width: 103 * 2.5, height: 42 * 2.5 }} source={require('./img/page3/4.png')} />
            </View>
            <View level={10}>
              <Image style={{ width: 95 * 2.5, height: 55 * 2.5 }} source={require('./img/page3/1.png')} />
            </View>
            <View style={{ ...levelStyle, top: 65, left: Platform.OS === 'android' ? 114 : 70 }} level={25} >
              <Image style={{ width: 47 * 2.5, height: 43 * 2.5 }} source={require('./img/page3/2.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Title!</Text></View>
            <View level={15}><Text style={styles.description}>description!</Text></View>
          </View>
        </View>
        {/* Page 4 */}
        <View style={[styles.slide, { backgroundColor: '#DB4302' }]}>
          <View style={[styles.header, Platform.OS === 'android' ? { width } : null]}>
            <View style={{ ...levelStyle, top: 25, left: Platform.OS === 'android' ? 36 : -35 }} level={15} >
              <Image style={{ width: 96 * 2.5, height: 69 * 2.5 }} source={require('./img/page4/4.png')} />
            </View>
            <View>
              <Image style={{ width: 50 * 2.5, height: 63 * 2.5 }} source={require('./img/page4/1.png')} />
            </View>
            <View style={{ ...levelStyle, top: 20, left: Platform.OS === 'android' ? 70 : 0 }} level={20} >
              <Image style={{ width: 46 * 2.5, height: 98 * 2.5 }} source={require('./img/page4/3.png')} />
            </View>
          </View>
          <View style={styles.info}>
            <View level={10}><Text style={styles.title}>Title!</Text></View>
            <View level={15}><Text style={styles.description}>description!</Text></View>
          </View>
        </View>
      </AppIntro>
    )
  }
}