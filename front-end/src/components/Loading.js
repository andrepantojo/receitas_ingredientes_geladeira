import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='border rounded p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }}>
                        <i className="visually-hidden pi pi-spin pi-cog" style={{ fontSize: '4rem' }}></i>
                    </div>
                </div>
                <p className="text-primary text-center">
                    { this.props.mensagem }
                </p>
            </div>
        )
    }
}

Loading.defaultProps = {
  mensagem: 'Por favor aguarde'
}
