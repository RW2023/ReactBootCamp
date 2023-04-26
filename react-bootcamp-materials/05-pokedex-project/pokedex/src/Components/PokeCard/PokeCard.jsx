import {Component} from "react";

class PokeCard extends Component{
    render(){
        let cardTitle = 'Card Title Goes Here'
        return(
            <>
            <div ClassName = 'PokeCard_Container'>
                <h1 ClassName = 'PokeCard_Title'>{cardTitle}</h1>
            </div>
            
            <div ClassName = 'PokeCard_Image'>
<img src="{}" alt="PokeMon" />
            </div>
            </>
        )
    }
}

export default PokeCard;