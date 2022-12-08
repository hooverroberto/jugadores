
import './App.css';

import Jugadores from './components/Jugadores'

function App() {
  return (
    <div className="App vh-100">
      <div className='container d-flex d-flex flex-column justify-content-center mt-3'>
        <Jugadores 
          imagen='mappe'
          texto=' Es un futbolista francés que juega como delantero en el Paris Saint-Germain F. C. de la Ligue 1.
          Comenzó su carrera con el club Mónaco de la Ligue 1, haciendo su debut profesional en 2015, a los 16 años. Con ellos, ganó un título de la Ligue 1, el Jugador Joven del Año de la Ligue 1 y el premio Golden Boy.5​ En 2017, fichó por el Paris Saint-Germain (PSG) en un préstamo inicial, que se hizo permanente en 2018 en una transferencia por valor de 180 millones de euros más complementos, lo que lo convirtió en el segundo jugador más caro y el jugador joven más caro. En el PSG, ha ganado cuatro títulos de la Ligue 1 y tres títulos de la Copa de Francia; también fue un jugador destacado en la carrera del club hacia su primera final de la Liga de Campeones de la UEFA en 2020. Actualmente es el segundo máximo goleador de la historia del PSG.'
        />

        <Jugadores 
          imagen='mj'
          texto='Es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.2​ Se retiró definitivamente en 2003 en los Washington Wizards, tras haberlo hecho en dos ocasiones anteriores, en 1993 y 1999, después de haber jugado 13 temporadas en los Chicago Bulls.

          Ganó 6 anillos con Chicago Bulls, promediando 30,1 puntos por partido en toda su carrera deportiva, el mayor promedio en la historia de la liga. También ganó 10 títulos de máximo anotador, 5 MVP de la temporada, 6 MVP de las Finales; fue nombrado en el mejor quinteto de la NBA en diez ocasiones, en el defensivo nueve veces, líder en robos de balón durante tres años y un premio al mejor defensor de la temporada.'
        />

        <Jugadores 
          imagen='chp'
          texto=' También conocido como Checo Pérez, es un piloto de automovilismo mexicano. Desde 2021 es piloto de Red Bull en Fórmula 1, resultando tercero en 2022.1​ Comenzó su carrera en 2004; en la Fórmula 3 Británica fue campeón en 2007. En 2009 debutó en la GP2 Series y al año siguiente fue subcampeón.

          Fue miembro de la Academia de pilotos de Ferrari hasta 2012. Hizo su debut en Fórmula 1 con el equipo Sauber durante la temporada 2011, donde obtuvo su primer podio en el Gran Premio de Malasia de 2012. Debido a su corta edad y buen desempeño, parte de la prensa lo apodó «El niño prodigio mexicano».2​ Pérez se unió a McLaren para la temporada 2013, pero sin lograr ningún podio.3​
          
          Force India fichó a Pérez para la temporada 2014 con un contrato de 15 millones de euros.4​ Permaneció en Force India cuando el equipo entró en administración en 2018 y se reformó como Racing Point para 2019. Este último, le otorgó una extensión de tres años a su contrato como piloto. En septiembre de 2020, Racing Point anunció su salida al final de la temporada, sustituido por el tetracampeón del mundo Sebastian Vettel para la siguiente campaña.'
        />
       
      </div>
    </div>
  );
}

export default App;
