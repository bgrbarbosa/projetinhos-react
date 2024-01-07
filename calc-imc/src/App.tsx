import { useState, FormEvent } from 'react'
import './App.css'
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

interface InfoProps{
  peso:number | undefined,
  altura:number | undefined,
  imc:number | undefined
  mensagem: string | undefined
}

function App() {
 
  const [peso, setPeso]= useState<number>();
  const [altura, setAltura] = useState<number>();
  const [info, setInfo] = useState<InfoProps>();

  function calcularImc(event: FormEvent){
    event.preventDefault();
    let imc = Number(peso / (altura*altura));
      if (imc < Number(18.5)){
          setInfo(
            {
              peso: peso,
              altura: altura,
              imc: imc,
              mensagem: "Magreza"
            }
          )} 

      if ((imc >= 18.5) && (imc <= 24.9)){
        setInfo(
          {
            peso: peso,
            altura: altura,
            imc: imc,
            mensagem: "Peso Normal"
          }
        )
      }
      if ((imc >=25.0) && (imc<= 29.9)){
        setInfo(
          {
            peso: peso,
            altura: altura,
            imc: imc,
            mensagem: "Acima do peso"
          }
        )
      }
      if (imc > 29.9){
        setInfo(
          {
            peso: peso,
            altura: altura,
            imc: imc,
            mensagem: "Obeso"
          }
        )
      }
    limparCampos  
  }
  
  function limparCampos(){
    setPeso(0);
  }    

  return (
    <main className="container">
        <div className="container text-center">
          <div className="row justify-content-start">
            <div className="col-6">
                <img
                  className="logo"
                  src={logo}
                  alt="Logo da calculadora de gasolina ou alcool"
                />
                <h1 className="title">Calculo de IMC</h1>
                <form className="form">
                  <label>Digite seu peso :</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Peso em kg"
                    min="1"
                    step="0.01"
                    required
                    value={peso}
                    onChange={ (e) => setPeso(Number(e.target.value)) }
                  />

                  <label>Digite sua altura :</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Altura em cm"
                    min="1"
                    step="0.01"
                    required
                    value={altura}
                    onChange={ (e) => setAltura(Number(e.target.value))}
                  />
                  <input className="button"  type="submit" value="Calcular" onClick={calcularImc}/>
                </form>
            </div>
            
            <div className="col-4">
                {info && Object.keys(info).length > 0 && (
                  <section className="result">
                    <h2 className="result-title">
                      Resultado do Calculo IMC
                    </h2>
          
                    <span>Peso: {info.peso}</span>
                    <span>Altura: {info.altura}</span>
                    <span>IMC: {info.imc}</span>
                    <span>Mensagem: {info.mensagem}</span>
                  </section>
                )}
            </div>
          </div>
        </div>  
 
        
      </main>
  )
}

export default App
