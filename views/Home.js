import {
  Platform,
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import {Settings} from 'react-native-feather';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require('../assets/kittens.jpeg')}
          style={styles.bgImage}
          imageStyle={{borderBottomRightRadius: 60}}
        ></ImageBackground>
        <Settings
          stroke="black"
          width={30}
          height={30}
          style={styles.settings}
        />
        <Text style={styles.kitty}>Kitty</Text>
      </View>
      <List navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 32, 32)',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  bgImage: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 60,
  },
  kitty: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 40,
    backgroundColor: 'rgb(74,129,255)',
  },
  settings: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
