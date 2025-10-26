const URL = 'https://api-cliente-dot-api-samples-423102.uc.r.appspot.com/api/clientes';

export async function findAll() {
  const init = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 12122349'
    }
  };

  const httpResponse = await fetch(URL, init);
  if(httpResponse.ok) {
    console.log('Clientes retornados com sucesso!');
    return await httpResponse.json();
  } else {
    const erro = await httpResponse.text();
    console.log(httpResponse.status, erro);
    throw new Error('Falha ao consultar os clientes. Motivo: ' + erro);
  }
}

export async function deleteById(id) {
  const init = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 12122349'
    }
  };

  const httpResponse = await fetch(`${URL}/${id}`, init);
  if(httpResponse.ok) {
    console.log('Cliente excluído com sucesso!');
    return await httpResponse.json();
  } else {
    const erro = await httpResponse.text();
    console.log(httpResponse.status, erro);
    throw new Error(erro);
  }
  
}
export async function insert(id, nome, telefone, email, endereço, cep, inseridoem, atualizadoem) {
  const body = JSON.stringify({ id, nome, telefone, email, endereço, cep, inseridoem, atualizadoem });

  const init = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 12122349',
      'Content-Type': 'application/json'
    },
    body
  };

  const httpResponse = await fetch(URL, init);
  if (httpResponse.ok) {
    console.log('Cliente inserido com sucesso!');
    return await httpResponse.json();
  } else {
    const erro = await httpResponse.text();
    console.log(httpResponse.status, erro);
    throw new Error('Falha ao inserir cliente. Motivo: ' + erro);
  }
}
