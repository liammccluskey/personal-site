import {Home} from './screens/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {colors} from './styles'
import {Navbar} from './components/Navbar'

const getStyles = () => {
 return {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '100vw',
    overflow: 'scroll',
    backgroundColor: colors.bgc
  },
 }
}

function App() {

  const styles = getStyles()

  return (
    <Router>
      <div style={styles.root}>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
