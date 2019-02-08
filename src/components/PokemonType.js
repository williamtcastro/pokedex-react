import React, {Component} from "react";

export default class PokemonTypes extends Component {


    render() {
        return( this.props.pokemonTypes.map(type_i => {
                return(<span class="badge badge-danger">{type_i.type.name.toUpperCase()}</span>
                )
            })
        );
    }
}
