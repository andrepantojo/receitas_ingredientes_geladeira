import React from 'react'
import Busca from './Busca'
import Imagem from './Imagem'
import imgGeladeira from '../imagens/geladeira.png'
import ListaReceita from './ListaReceita'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default class App extends React.Component {

  state = {
    receita: []
  }

  onBuscaRealizada = (busca) => {
    console.log(busca)

    this.state({receita: busca})

    // pexelsClient.get('/search', {
    //   params: {
    //     query: termo
    //   }
    // })
    // .then(result => {
    //   this.setState({pics: result.data.photos})
    // })

    // const { prompt } = req.body;
    // const model = 'gpt-3.5-turbo';
    // const role = 'user';
    // const max_tokens = 50;
    // const completion = openai.chat.completions.create({
    //     messages: [{ role: role, content: prompt }],
    //     model: model,
    //     max_tokens: max_tokens
    // });
    // res.json({ completion: completion.choices[0].message.content });
  }

   componentDidMount(){
    
    //this.state.termoDeBusca.focus();
    //this.pixelsClient = createClient('zMgbFC3E8gThy544SiXmD7UooycTiUgzqySZBkarzNYFsRyVycpeVksy')
   }

  render(){
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
                    <Busca 
                      onBuscaRealizada={this.onBuscaRealizada}
                    />
                  </div>

                </div>
              </SplitterPanel>
              <SplitterPanel size={85}>
                <Splitter>
                  <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                    <ListaReceita pics={this.state.receita}/>
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