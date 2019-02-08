import React, { Component } from "react";
import './App.css';
import Header from './Header';
import InfoContent from './InfoContent';
import Footer from './Footer';
import InfoBasicContent from './InfoBasicContent';
import PokemonList from './PokemonList';

class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      search_input: "",
      data: {
        img_front: '/150x150.png',
        img_back: '/150x150.png',
      },
      app_status: 0,
      offset:0,
      pokemonListResults: [],
      pokemonListResultsStatus: 0,
    };
  }

  updateInputValue(evt) {
    this.setState({
        search_input: evt.target.value.toLowerCase(),
    });
  }

  SearchApi(pokemonId) {
    var api;
    if(!pokemonId){
      api = "https://pokeapi.co/api/v2/pokemon/" + this.state.search_input;
    }else{
      api = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
    }

    const objThis = this;
    fetch(api)
      .then(response => response.json())
      .catch((error) => {})
      .then(findresponse => {
        if (findresponse != null){
        this.setState({
          data: {
            name: findresponse.name,
            code: findresponse.id,
            img_front: findresponse.sprites.front_default,
            img_back: findresponse.sprites.back_default,
            types: findresponse.types,
            weight: findresponse.weight,
            height: findresponse.height,
            abilities: findresponse.abilities,
          }
        });
        this.loadTypes();
      
      }else{
        alert("POKEMON NON ECXISTE");
      }
    });
  }


  SearchApiList(offset_i) {
    let url;
    if(!offset_i){
      url = "https://pokeapi.co/api/v2/pokemon?offset="+this.state.offset+"&limit=20"
    }else{
      url = "https://pokeapi.co/api/v2/pokemon?offset="+offset_i+"&limit=20"
    }
    const objThis = this;
    fetch(url)
      .then(response => response.json())
      .then(findresponse => {
          this.setState({
              pokemonListResults: findresponse.results,
              pokemonCount: findresponse.count,
              pokemonListResultsStatus: 1,
              app_status: 1,
          });
      });
  }

  loadTypes(){
      this.setState({
        pokemonTypes: this.state.data.types,
        pokemonAbilities: this.state.data.abilities,
        app_status: 2,
      });
  }

  setActualPage(actual_page){
    this.setState({
      app_status: actual_page,
    });
  }

  render() {
    let info_content;

    if(this.state.app_status == 0){
      info_content = <InfoBasicContent SearchApi={this.SearchApi.bind(this)} updateInputValue={this.updateInputValue.bind(this)}/>
    }
    if(this.state.app_status == 1){
      if(this.state.pokemonListResultsStatus == 0){this.SearchApiList()}
        info_content = <PokemonList SearchApi={this.SearchApi.bind(this)} pokemonListResults={this.state.pokemonListResults} pokemonCount={this.state.pokemonCount} setOffsetIndex={this.SearchApiList.bind(this)}/>
    }
    if(this.state.app_status == 2){
      info_content = <InfoContent result={this.state.data} pokemonTypes={this.state.pokemonTypes} pokemonAbilities={this.state.pokemonAbilities}/>
    }


    return (
      <div>
      <Header SearchApi={this.SearchApi.bind(this)} updateInputValue={this.updateInputValue.bind(this)} setActualPage={this.setActualPage.bind(this)}/>
      {info_content}
      <Footer/>
      </div>
      );
  }
}

export default App;
