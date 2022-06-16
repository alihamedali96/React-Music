import {Button,Card} from 'react-bootstrap'
import Cards from "./Cards"

const Albums = () => { 
    return(
        <>
        <div id="cards">
        <Cards album = "Chanel Orange" year="2016" img= "/Users/gharibaahmedsuleiman/Documents/Ali Work/React-fp/demo/src/Chanel.jpeg" />
        <Cards album = "Lonny Breaux Collection" year="2011" img ="demo/src/Lonny.jpeg"/>
        <Cards album = "Nostalgia ULTRA" year="2011" img ="demo/src/Ultra.jpeg" />
        </div>
        </>
    );
 }

 export default Albums;
