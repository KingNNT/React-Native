import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
  },
  tinyLogo: {
    height: 48,
    width: 48,
  },
  ranger: {
    padding: 10,
  },
});
export default styles;
