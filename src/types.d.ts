export type ApiContextType = {
  loading: boolean;
  apiData: ApiType;
};

export type ApiType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previusPage: number;
  showingFrom: number;
  showingTo: number;
  items: ApiItemType[];
};

export type ApiItemType = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};
