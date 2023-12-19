import React from 'react'
import Busca from './Busca'
import Imagem from './Imagem'
import imgGeladeira from '../img/geladeira.png'
import ListaReceita from './ListaReceita'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import openAI from '../utils/openAI'
import Loading from './Loading'


export default class App extends React.Component {
  state = {
    receita: '',
    buscando: null
  }

  onBuscaRealizada = (busca) => {
    console.log(busca)
    this.setState({receita: '', buscando: 'sim'})
    openAI.post('/pergunte-ao-chatgpt',{ prompt: 'RECEITA SOMENTE COM ' + busca })
    .then(result => {
      this.setState({receita: result.data.completion, buscando: null})
    })
    .catch(erro => {
      console.log(erro);
      this.setState({receita: erro, buscando: null})
    });
  }


  render() {
    console.log(this.state.receita)
    return (
      <div>

        <Splitter className='border-400 w-9 m-auto p-300' style={{ height: '700px' }}>

          <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
            <Imagem
              pic='./imagens/geladeira.png'
              alt=''
            />
            <img src={imgGeladeira} className="App-logo" alt="logo" />
          </SplitterPanel>

          <SplitterPanel size={80}>
            <Splitter layout="vertical">
              <SplitterPanel className="flex align-items-center justify-content-center" size={15}>

                <div className='col-12'>
                  <p className='text-center mt-2'>Encontre aqui receitas com ingredientes que você tem na sua geladeira!</p>

                  <div className='flex flex-column'>
                    {this.state.buscando ?
                      <Loading />
                      :
                      <Busca
                        onBuscaRealizada={this.onBuscaRealizada}
                      />
                    }
                  </div>

                </div>
              </SplitterPanel>
              <SplitterPanel size={85}>
                <Splitter>
                  <SplitterPanel className="flex align-items-top justify-content-center p-2" size={80}>
                    <ListaReceita receita={this.state.receita} />
                  </SplitterPanel>
                </Splitter>
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>

      </div>

    )
  }
}