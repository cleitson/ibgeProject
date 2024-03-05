import { useContext } from 'react';
import emptyHeart from '../../assets/emptyHeart.svg';
import fullHeart from '../../assets/fullHeart.svg';
import ApiContext from '../../context/ApiContext';
import { ApiItemType } from '../../types';

type IsFavoriteProps = {
  idNews: ApiItemType;
};
function IsFavorite({ idNews }: IsFavoriteProps) {
  const { handleClickFavorite, favorites } = useContext(ApiContext);

  const newsExists = favorites.find((favorite) => favorite.id === idNews.id);

  return (
    <button
      onClick={ () => handleClickFavorite(idNews) }
    >
      <img src={ newsExists ? fullHeart : emptyHeart } alt="is favorite?" />
    </button>
  );
}

export default IsFavorite;
