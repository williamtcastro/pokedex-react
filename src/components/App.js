import React, { Component } from "react";
import './App.css';
import Header from './Header';
import InfoContent from './InfoContent';
import Footer from './Footer';
import InfoBasicContent from './InfoBasicContent';
import PokemonList from './PokemonList';
import InfoNoContent from "./InfoNoContent";

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
    console.log(evt.target.value);
    // this.setState({
    //     search_input: evt.target.value.toLowerCase(),
    // }); 
    // this.SearchApi();
  }

  SearchApi(value) {
    if(value == 0){
      this.setState({
        app_status: 0,
      });
    }
    console.log("SEARCH API");
    // var api = "https://pokeapi.co/api/v2/pokemon/" + this.state.search_input;
    var api = "https://pokeapi.co/api/v2/pokemon/" + value.toLowerCase();

    const objThis = this;
    fetch(api)
      .then(response => response.json())
      .catch((error) => {})
      .then(findresponse => {
        if (findresponse != null){
          this.loadTypes(findresponse);
        }
      // else{
      //   alert("POKEMON NON ECXISTE");
      // }
    });
  }


  SearchApiList(offset_i) {
    console.log("SEARCH API APP")
    let url, limit = 60;
    if(!offset_i){
      url = "https://pokeapi.co/api/v2/pokemon?offset="+this.state.offset+"&limit="+limit;
    }else{
      url = "https://pokeapi.co/api/v2/pokemon?offset="+offset_i+"&limit="+limit;
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

  loadTypes(resp){
    console.log("loadTypes");
    this.setState({
      data: {
        name: resp.name,
        code: resp.id,
        img_front: resp.sprites.front_default,
        img_back: resp.sprites.back_default,
        types: resp.types,
        weight: resp.weight,
        height: resp.height,
        abilities: resp.abilities,
      }});

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
      info_content = <InfoNoContent/>
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
