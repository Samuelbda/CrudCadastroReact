import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import Foto from '../assets/Cliente.jpg';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
}

export default function Card({
  id, nome, telefone, rg, endereco, cep, email, creationTimestamp, updateTimestamp, onDelete
}) {
  return (
    <View style={styles.card}>
      <Image source={Foto} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.label}>ID: <Text style={styles.value}>{id}</Text></Text>
        <Text style={styles.label}>Telefone: <Text style={styles.value}>{telefone}</Text></Text>
        <Text style={styles.label}>RG: <Text style={styles.value}>{rg}</Text></Text>
        <Text style={styles.label}>Endereço: <Text style={styles.value}>{endereco}</Text></Text>
        <Text style={styles.label}>CEP: <Text style={styles.value}>{cep}</Text></Text>
        <Text style={styles.label}>Email: <Text style={styles.value}>{email}</Text></Text>
        <Text style={styles.label}>Criado em: <Text style={styles.value}>{formatDate(creationTimestamp)}</Text></Text>
        <Text style={styles.label}>Atualizado em: <Text style={styles.value}>{formatDate(updateTimestamp)}</Text></Text>
      </View>

      <TouchableOpacity onPress={onDelete} style={styles.delete}>
        <FontAwesome name="trash" size={24} color="#d11a2a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    color: '#555',
    marginBottom: 2,
  },
  value: {
    fontWeight: 'normal',
    color: '#444',
  },
  delete: {
    marginLeft: 10,
    alignSelf: 'center',
    backgroundColor: '#ffe6e6',
    borderRadius: 20,
    padding: 6,
  },
});
