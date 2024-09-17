const urlEstados =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

async function buscarEstados() {
  const resposta = await fetch(urlEstados);
  const estados = await resposta.json();

  const estadoSelect = document.getElementById("estado");

  for (const estado of estados) {
    estadoSelect.innerHTML += `<option value="${estado.sigla}">${estado.nome}</option>`;
  }
}

buscarEstados();

async function buscarCidades() {
  const estadoSelect = document.getElementById("estado");

  const resposta = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelect.value}/municipios`
  );

  const cidades = await resposta.json();

  const cidadesTable = document.getElementById("cidades");

  cidadesTable.innerHTML = "";

  for (const cidade of cidades) {
    cidadesTable.innerHTML += `<tr> <td>${cidade.nome}</td> <td>${cidade.microrregiao.mesorregiao.UF.nome}</td></tr>`;
  }
}

