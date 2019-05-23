import React, { Component } from "react";
import './App.css';

export default class Header extends Component {

    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt){
        this.props.SearchApi(evt.target.value);
    }

    render(){
        return(
            <nav class="navbar navbar-expand-sm navbar-light bg-light nav-custom">
        <a class="navbar-brand" href="javascript:void(0)" onClick={this.props.setActualPage.bind(this, 0)}>Pokédex</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0)" onClick={this.props.setActualPage.bind(this, 0)}>Inicio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)" onClick={this.props.setActualPage.bind(this, 1)} >Lista de Pokemons</a>
                </li>
            </ul>
            <form class="navbar-form navbar-right">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Pesquisar" name="search"
                onChange={evt => this.handleInput(evt)}/>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
        </div>
    </nav>
        );
    }
}