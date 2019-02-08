import React, {Component} from "react";

export default class PokemonAbilities extends Component {


    render() {
        return( this.props.pokemonAbilities.map(ability_i => {
                return(<span class="badge badge-danger">{ability_i.ability.name.toUpperCase()}</span>
                )
            }, )
        );
    }
}
