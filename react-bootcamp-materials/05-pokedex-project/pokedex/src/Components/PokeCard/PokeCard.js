import { Component } from "react";
import './PokeCard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
console.log(POKE_API)
class PokeCard extends Component {

    render() {
        let imageSrc = `${POKE_API}${this.props.id}.png`;

        return (
            <div className="PokeCard">
                <h2 className='PokeCard_Title'>{this.props.name}</h2>
                
                    <div className='PokeCard_Image'>
                        <img src={imageSrc} alt={this.props.name} />
                    </div>
                    <div className='PokeCard_Type'>
                       <div>{this.props.type}</div>
                        <div>{this.props.Experience}</div>
                    </div>
            </div>
        );
    }
}

export default PokeCard;
