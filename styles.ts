import {StyleSheet, ViewStyle, TextStyle, View} from 'react-native';


interface Styles {
  header: TextStyle;
  tagContainer: ViewStyle;
  button: ViewStyle;
  buttonContainer: ViewStyle;
  tags: ViewStyle;
  tagText: ViewStyle;
  tagImage: ViewStyle;
  selectedTag: ViewStyle;
  scrollviewsubview: ViewStyle;
  filterbytext: TextStyle;
  cleartext: TextStyle;
  categoryview: ViewStyle;
  scrollContainerfortags: ViewStyle;
  mainviewmlutislider: ViewStyle;
  subviewMlutislider: ViewStyle;
  multiragnetextview: ViewStyle;
  multiviewtext: ViewStyle;
  multiviewtextsecond: ViewStyle;
  bottombtn: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  header: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: 'white',
  },
  tagContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    color: 'white',
    flexWrap: 'wrap',
    marginTop: '1%',
  },
  tags: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 6,
    flexDirection: 'row',
  },
  tagText: {
    color: '#000',
    margin: 5,
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 6,
  },
  tagImage: {
    width: 20,
    height: 20,
  },
  selectedTag: {
    borderColor: 'red',
    backgroundColor: '#fedada',
  },
  scrollviewsubview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  filterbytext: {
    marginLeft: '5%',
  },
  cleartext: {
    marginRight: '5%',
  },
  categoryview: {
    marginLeft: '5%',
    marginTop: '8%',
  },
  scrollContainerfortags: {
    marginLeft: 15,
    paddingRight: 15,
  },
  mainviewmlutislider: {
    alignSelf: 'center',
    flex: 1,
  },
  subviewMlutislider: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
  },
  multiragnetextview: {
    flexDirection: 'row',
  },
  multiviewtext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  multiviewtextsecond: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'right',
  },
  bottombtn: {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop:  '10%',
  },
});

export default styles;
