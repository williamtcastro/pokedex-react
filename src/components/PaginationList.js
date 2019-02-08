import React, {Component} from "react";
import './App.css';

export default class PaginationList extends Component {
    render() {
        let page_list = [];
        console.log(this.props.pokemonCount)
        let loop_i = this.props.pokemonCount / 20;
        var min = 0;
        var max = Math.round(this.props.pokemonCount / 20);


        for(let i = 0; i < loop_i; i++){
            console.log(loop_i)
            page_list.push(
                <li class="page-item"><a a onClick={this.props.setOffsetIndex.bind(this, i*20)}  class="page-link" href="javascript:void(0);">{i+1}</a></li>
            )
        }

        return(
            <div class="container"> <center>
            <ul class="pagination pagination-sm text-center">
            <li class="page-item"><a a onClick={this.props.setOffsetIndex.bind(this, min)}  class="page-link" href="javascript:void(0);">Primeira</a></li>
            {page_list}
            <li class="page-item"><a onClick={this.props.setOffsetIndex.bind(this, max)} class="page-link" href="javascript:void(0);">Ultima</a></li>
            </ul>
          </center>
              </div>
    );
    }
}


