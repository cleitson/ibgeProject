import moment from 'moment';

export default function dateToDays(data: string): string {
  const dataAtual = moment();
  const dataPassada = moment(data, 'DD/MM/YYYY HH:mm:ss');
  const diferencaEmDias = dataAtual.diff(dataPassada, 'days');
  if (diferencaEmDias === 0) return 'Hoje';
  return `${diferencaEmDias} dias atrás`;
}
