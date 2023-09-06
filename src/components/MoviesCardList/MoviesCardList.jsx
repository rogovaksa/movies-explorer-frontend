import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
            </ul>
            <button className={props.saved ? 'movies-cards__more-button movies-cards__more-button_invisible' : 'movies-cards__more-button'}>Еще</button>
        </section>
    )
}

export default MoviesCardList;