import Grid from '@material-ui/core/Grid';
import './App.css';
//import AccordionFoler from './components/NavTabs/Accordian/Accordian';
import VerticalTabs from './components/NavTabs/NavTabs'

function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid className="nav" xs={5}>
                    {/*<AccordionFoler />*/}
                    <VerticalTabs />
                </Grid>

                <Grid className="email-content" xs={7}>
                    <h1></h1>
                </Grid>
            </Grid>

        </div>
    );
}

export default App;
