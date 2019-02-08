import React, { Component } from "react";
import './App.css';
import PokemonTypes from './PokemonType';
import PokemonAbilities from './PokemonAbilities';

export default class InfoContent extends Component {
    render(){
        return(
            <div class="container spacing">
          <div class="container">
                <div class="card info-content">
                        <div class="text-center"><h2><span class="badge badge-danger">{this.props.result.code}</span></h2></div>
                        <div class="text-center">
                                <img class="card-img-top img-pokemon" src={this.props.result.img_front} alt={this.props.result.name}></img>
                                <img class="card-img-top img-pokemon" src={this.props.result.img_back}  alt={this.props.result.name}></img>
                            </div>
                        <div class="card-body">
                          <h3 class="card-title text-center"><strong>{this.props.result.name.toUpperCase()}</strong></h3>
                          {/* <p class="card-text text-center">Descrição do pokemon fudido</p> */}
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>Tipo: </strong><PokemonTypes pokemonTypes={this.props.pokemonTypes} /></li>
                          <li class="list-group-item"><strong>Golpes: </strong><PokemonAbilities pokemonAbilities={this.props.pokemonAbilities} /></li>
                          <li class="list-group-item"><strong>Altura: </strong>{this.props.result.height/10} Metros</li>
                          <li class="list-group-item"><strong>Peso: </strong>{this.props.result.weight/10} Kg</li>
                        </ul>
                      </div>
          </div>
    </div>
        );
    }
}