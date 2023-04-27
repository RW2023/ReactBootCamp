import { Component } from "react";
import './PokeCard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class PokeCard extends Component {

    render() {
        let imageSrc = `${POKE_API}${this.props.id}.png`;

        return (
            <>
                <div className='PokeCard_Container'>
                    <h2 className='PokeCard_Title'>{this.props.name}</h2>
                </div>

                <div className='PokeCard_Image'>
                    <img src={imageSrc} alt={this.props.name} />
                </div>
                <div className='PokeCard_Type'>
                   <p>{this.props.name}</p>
                    <p>{this.props.Experience}</p>

                </div>
            </>
        );
    }
}

export default PokeCard;
