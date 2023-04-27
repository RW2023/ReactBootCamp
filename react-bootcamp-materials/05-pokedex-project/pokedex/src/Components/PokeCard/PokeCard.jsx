import { Component } from "react";

class PokeCard extends Component {
    render() {
        let cardTitle = 'PokeMon Name Goes Here';
        const imageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png';

        return (
            <>
                <div className='PokeCard_Container'>
                    <h1>PokeCard</h1>
                    <h2 className='PokeCard_Title'>{cardTitle}</h2>
                </div>

                <div className='PokeCard_Image'>
                    <img src={imageUrl} alt="PokeMon" />
                </div>
                <div className='PokeCard_Type'>
                   <p>Type Goes Here</p>
                   <p>Experience goes here</p>

                </div>
            </>
        );
    }
}

export default PokeCard;
