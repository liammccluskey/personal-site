import {Provider} from 'react-redux'

import {store} from './redux/configureStore'
import {ThemeProvider} from './containers/ThemeProvider'
import {RouterProvider} from './containers/RouterProvider'
import { CssProvider } from './containers/CssProvider'

const App = props => {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <CssProvider>
                <RouterProvider />
          </CssProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App