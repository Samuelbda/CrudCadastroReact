import { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import Card from './Card';
import { findAll, deleteById, insert } from './ClientesApi';
import {
  Button,
  TextInput,
  PaperProvider,
  Portal,
  Dialog,
} from 'react-native-paper';

export default function ClientesView({ navigation }) {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rg, setRg] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [criadoEm, setCriadoEm] = useState('');
  const [atualizadoEm, setAtualizadoEm] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = async () => {
    try {
      const clientes = await findAll();
      setListaClientes(clientes);
      if (clientes.length === 0) {
        navigation.setOptions({ title: 'Crie um Cliente' });
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao buscar clientes', error.message);
    }
  };

  const excluirCliente = async (id) => {
    try {
      await deleteById(id);
      Alert.alert('Sucesso', 'Cliente excluído');
      await buscarClientes();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao excluir', error.message);
    }
  };

const salvarContato = async () => {
  const novoContato = await insert(tipo, nome, telefone);
  alert('Contato cadastrado samuquinha');
  listaContatos.push(novoContato);
  setListaContatos(listaContatos);
};


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setId('');
    setNome('');
    setTelefone('');
    setRg('');
    setEndereco('');
    setCep('');
    setEmail('');
    setCriadoEm('');
    setAtualizadoEm('');
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={listaClientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card {...item} onDelete={() => excluirCliente(item.id)} />
          )}
        />

        <Button mode="contained" onPress={buscarClientes} style={styles.button}>
          BUSCAR CLIENTES
        </Button>
        <Button onPress={openModal}>Adicionar Contatos</Button>

        <Portal>
          <Dialog visible={showModal} onDismiss={closeModal}>
            <Dialog.Title>Novo Contato</Dialog.Title>
            <Dialog.Content>
              <TextInput label="ID" value={id} onChangeText={setId} />
              <TextInput label="Nome" value={nome} onChangeText={setNome} />
              <TextInput
                label="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
              />
              <TextInput label="RG" value={rg} onChangeText={setRg} />
              <TextInput
                label="Endereço"
                value={endereco}
                onChangeText={setEndereco}
              />
              <TextInput
                label="CEP"
                value={cep}
                onChangeText={setCep}
                keyboardType="numeric"
              />
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TextInput label="Criado em" value={criadoEm} disabled />
              <TextInput label="Atualizado em" value={atualizadoEm} disabled />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={closeModal}>Cancelar</Button>
              <Button onPress={salvarContato}>Salvar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
  },
});
