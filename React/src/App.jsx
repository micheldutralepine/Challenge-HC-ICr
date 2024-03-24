
import './App.css'
import Agendamento from './Componentes/Agendamento/Agendamento'
import Banner from './Componentes/Banner/Banner'
import EducacaoLudica from './Componentes/Educacao-Ludica/Educacao-Ludica'
import Header from './Componentes/Header/Header'
import Impactos from './Componentes/Impactos/Impactos'
import Informacoes from './Componentes/Informações/Informacoes'
import PerfilPersonalizado from './Componentes/Perfil-Personalizado/Perfil-Personalizado'
import Relatos from './Componentes/Relatos/Relatos'
import SobreHospital from './Componentes/Sobre-Hospital/Sobre-Hospital'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <SobreHospital/>
      <Impactos/>
      <Relatos/>
      <Agendamento/>
      <EducacaoLudica/>
      <PerfilPersonalizado/>
      <Informacoes/>
    </>
  )
}

export default App
