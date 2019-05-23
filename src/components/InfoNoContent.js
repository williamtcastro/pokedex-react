import React, { Component } from "react";
import './App.css';

export default class InfoNoContent extends Component {
    render(){
        return(
            <div class="container spacing">
                <div class="container">
                    <div class="card info-content">
                        <div class="container-basic"><div class="text-center spacing"><h3>Pesquise um <strong>Pokemon</strong> por nome ou código</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}