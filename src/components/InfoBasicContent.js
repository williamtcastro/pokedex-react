import React, { Component } from "react";
import './App.css';

export default class InfoBasicContent extends Component {

  constructor(){
    super();
    this.handleInput = this.handleInput.bind(this);
  }

handleInput(evt){
    this.props.SearchApi(evt.target.value);
    console.log(evt.target.value);
}


    render(){
        return(
        <div class="container spacing">
          <div class="container">
                <div class="card info-content">
                <div class="container-basic"><div class="text-center spacing"><h3>Pesquise um <strong>Pokemon</strong> por nome ou código</h3></div>
                        </div>
                        <div class="card-body"><form class="navbar-form navbar-right" onSubmit={this.props.SearchApi.bind(this, null)} action="javascript:void(0)">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Pesquisar" name="search" onChange={evt => this.handleInput(evt)}/>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                        Pesquisar
                    </button>
                  </div>
                </div>
              </form></div>
                </div>
          </div>
    </div>
        );
    }
}