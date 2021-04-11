export interface IPatient {
  // eslint-disable-next-line camelcase
  vacina_dataAplicacao: string;
  // eslint-disable-next-line camelcase
  paciente_racaCor_codigo: string;
  // eslint-disable-next-line camelcase
  paciente_racaCor_valor: string;
  // eslint-disable-next-line camelcase
  paciente_endereco_coIbgeMunicipio: string;
  // eslint-disable-next-line camelcase
  vacina_fabricante_nome: string;
  // eslint-disable-next-line camelcase
  estalecimento_noFantasia: string;
  // eslint-disable-next-line camelcase
  paciente_idade: number;
  // eslint-disable-next-line camelcase
  paciente_endereco_coPais: string;
  // eslint-disable-next-line camelcase
  paciente_dataNascimento: string;
  // eslint-disable-next-line camelcase
  document_id: string;
  // eslint-disable-next-line camelcase
  estabelecimento_uf: string;
  // eslint-disable-next-line camelcase
  vacina_descricao_dose: string;
  // eslint-disable-next-line camelcase
  paciente_endereco_uf: string;
  // eslint-disable-next-line camelcase
  estabelecimento_municipio_codigo: string;
  // eslint-disable-next-line camelcase
  paciente_id: string;
  // eslint-disable-next-line camelcase
  estabelecimento_municipio_nome: string;
  // eslint-disable-next-line camelcase
  paciente_endereco_cep: string;
  '@timestamp': string;
  // eslint-disable-next-line camelcase
  paciente_enumSexoBiologico: string;
  // eslint-disable-next-line camelcase
  paciente_nacionalidade_enumNacionalidade: string;
  // eslint-disable-next-line camelcase
  sistema_origem: string;
  // eslint-disable-next-line camelcase
  estabelecimento_valor: string;
  // eslint-disable-next-line camelcase
  paciente_endereco_nmPais: string;
  // eslint-disable-next-line camelcase
  estabelecimento_razaoSocial: string;
  // eslint-disable-next-line camelcase
  paciente_endereco_nmMunicipio: string;
  // eslint-disable-next-line camelcase
  vacina_grupoAtendimento_codigo: string;
  // eslint-disable-next-line camelcase
  vacina_lote: string;
  // eslint-disable-next-line camelcase
  vacina_codigo: string;
  // eslint-disable-next-line camelcase
  vacina_nome: string;
  // eslint-disable-next-line camelcase
  data_importacao_rnds: string;
  '@version': string;
}

export interface ICountReponse {
  count: number;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
}

export interface ISearchResponse {
  // eslint-disable-next-line camelcase
  _scroll_id: string;
  took: number;
  // eslint-disable-next-line camelcase
  timed_out: boolean;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
  hits: {
    total: {
      value: number;
      relation: string;
    };
    // eslint-disable-next-line camelcase
    max_score: number;
    hits: [
      {
        _index: string;
        _type: string;
        _id: string;
        _score: number;
        _source: IPatient;
      },
    ];
  };
}
