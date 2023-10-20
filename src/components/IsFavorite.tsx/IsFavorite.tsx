import { useContext } from 'react';
import emptyHeart from '../../assets/emptyHeart.svg';
import fullHeart from '../../assets/fullHeart.svg';
import ApiContext from '../../context/ApiContext';
import { ApiItemType } from '../../types';
import style from './IsFavorite.module.css';

type IsFavoriteProps = {
  idNews: ApiItemType;
};
function IsFavorite({ idNews }: IsFavoriteProps) {
  const { handleClickFavorite, favorites } = useContext(ApiContext);

  const newsExists = favorites.find((favorite) => favorite.id === idNews.id);

  return (
    <button
      onClick={ () => handleClickFavorite(idNews) }
      className={ style.favorite }
    >
      <img src={ newsExists ? fullHeart : emptyHeart } alt="is favorite?" />
    </button>
  );
}

export default IsFavorite;
