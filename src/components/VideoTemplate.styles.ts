import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  descWrapper: {
    width: 304,
    marginTop: 10,
    marginBottom: 14,
    justifyContent: 'space-between',
  },
  container: {
    width: 331,
    height: 207,
    paddingTop: 18,
    paddingBottom: 14,
    borderColor: '#000',
    borderBottomWidth: 1.6,
  },
  containerSize: {
    width: 304,
    height: 128,
    borderWidth: 1.6,
    borderRadius: 6.4,
    borderColor: '#000000',
  },
  checkBox: {
    margin: 0,
    padding: 0,
  },
  icon: {
    width: 43,
    height: 43,
  },
});
