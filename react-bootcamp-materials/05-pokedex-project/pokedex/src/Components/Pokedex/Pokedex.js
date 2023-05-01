import React, { Component } from "react";
import PokeCard from "../PokeCard/PokeCard";
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }
        return (
            <div className="Pokedex">
                <h1>PokeDex!</h1>
                <p>Total Experience: {this.props.exp}</p>
                {title}
                <p>{this.props.isWinner ? 'Winner! 😊' : 'Loser! 😖'}</p>
                <div className="Pokidex-card">
                    {this.props.pokemon.map((p) => {
                        return <PokeCard id={p.id} name={p.name} type={p.type} Experience={p.base_experience} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pokedex;
