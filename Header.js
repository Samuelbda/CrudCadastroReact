import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Clientes.jpg';

export default function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>Clientes</Text>
      <Image source={Logo} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFA726',
    alignItems: 'center',
    gap: 13,
    padding: 18,
    paddingTop: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 10
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100
  }
});
