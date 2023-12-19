//rcc: react class component
import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'



export default class Busca extends Component {

    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        console.log(event.target.value.toUpperCase())
        this.setState({ termoDeBusca: event.target.value.toUpperCase() })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <span className="p-input-icon-left w-full">
                        <i className="pi pi-search"></i>
                        <InputText
                            autoFocus
                            value={this.state.termoDeBusca}
                            className='w-full'
                            onChange={this.onTermoAlterado}
                            placeholder={this.props.dica}
                        />
                    </span>
                    <Button
                        label="Buscar"
                        className='p-button-outlined mt-2'
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
  dica: 'Digite algo para buscar a receita...'
}