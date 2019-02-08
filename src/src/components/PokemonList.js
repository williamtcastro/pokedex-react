import React, {Component} from "react";
import './App.css';
import PaginationList from './PaginationList';

export default class PokemonList extends Component {
    render() {
        return(
            <div class="container spacing">
              <div class="container">
                <div class="card info-content">
                      <div class="container-basic">
                            <div class="text-center spacing"><h3>Lista de Pokemons</h3></div>
                      </div>
                      <div class="card-body">
                      <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Código</th>
                          <th scope="col">Foto</th>
                          <th scope="col">Nome</th>
                        </tr>
                      </thead>
                <tbody>
                      {this.props.pokemonListResults.map(data => {
                 
                 let url = data.url;
                 let array = url.split('/'); 
                 let pokemon_code = array[6];
                 let pokemon_img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon_code+".png"
               
                return (
                   <tr onClick={this.props.SearchApi.bind(this, pokemon_code)}>
                     <td>{pokemon_code}</td>
                     <td><img class="card-img-top img-photo-table" src={pokemon_img}/></td>
                     <td><strong>{data.name.toUpperCase()}</strong></td>
                 </tr>
                )
               })}     
                      </tbody>
                    </table>
                    <PaginationList pokemonCount={this.props.pokemonCount} setOffsetIndex={this.props.setOffsetIndex.bind(this)}/>
                      </div>
                  </div>
                </div>
             </div>
        );
    }
}