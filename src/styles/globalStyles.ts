/**
 * @author Ashok Desai
 * @lastModified Fri 20 Dec 2024 10:45 AM
 */

import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  newContainer: {
    flex: 1,
  },
  // new styles
  flexOneJustifyContentAndAlignItemsCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOneJustifyContentCenterAndAlignItemsCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hundredPercentWidth: {
    width: '100%',
  },
  hundredPercentHeight: {
    height: '100%',
  },
  marginZeroAndPaddingZero: {
    margin: 0,
    padding: 0,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  flexOne: {
    flex: 1,
  },
  flexZero: {
    flex: 0,
  },
  positionAbsolute: {
    position: 'absolute',
  },
  twentyPercentWidth: {
    width: '20%',
  },
  alignItemsCenterAndJustifyContentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  flexRow_alignCenter_justifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexOneWithBlackBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default globalStyles;
