import {StyleSheet} from 'react-native';

export const gSt = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#D8E3E7',
    paddingTop: 20,
    paddingBottom: 30
  },
  mainTitle: {
    fontSize: 20,
    fontFamily: 'rb-bold',
    color: '#132C33',
    textAlign: 'center'
  },
  text: {
    fontFamily: 'rb-regular',
    color: '#132C33',
    fontSize: 16
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    paddingLeft: 15
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  errorMsg: {
    color: '#ff0038',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
})