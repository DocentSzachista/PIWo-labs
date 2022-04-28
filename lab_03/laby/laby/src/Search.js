import React from "react";
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "Abc"
        };
    }

    // stzalka po to by nie rozpatrywalo this po ciele funkcji a ciele klasy
    updateQuery = (event) =>{
        // czemu tak, trzeba wywolac setState by zmienic stan zmiennej
        this.setState({
            query: event.target.query
        });
    };


    render(){
        // filtruje elementy jezeli jest tru warunek w filter to map potem drukuje
        const toDosHTML = this.props.toDos.filter(it => it.includes(this.state.query))
        .map((it, i)=>{
            return <p key ={i}>{it}</p>
        });

        return (
        <div>
            <input value={this.state.query} onChange={this.updateQuery} />
        </div>
        );
    }
}
export default Search;