import { View, StyleSheet } from 'react-native';
import CustomButton from './CusttomButton';
import Header from './Header';

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.centeredView}>
        <CustomButton 
          title="BUSCAR CLIENTES" 
          color="#2196F3" 
          onPress={() => navigation.navigate('clientes')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
});
