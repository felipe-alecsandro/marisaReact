import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//IMPORTAÇÃO DE ESTILOS
import './css/icon.css';
import './css/materialize.min.css';
import './css/style.css';

// IMPORTAÇÃO DE COMPONENTES
import Produtos from './containers/Produtos';
import Sacola from './containers/Sacola';

//DEPENDENCIA PARA GERIR AS ROTAS
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//CONFIGURAÇÃO REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { produtosReducer } from './reducers/produtos';
import { sacolaNotificaReducer, sacolaListaReducer } from './reducers/sacola';
import { Provider } from 'react-redux';
//FIM - CONFIGURAÇÃO REDUX

const reducers = combineReducers({ produtosReducer, sacolaNotificaReducer, sacolaListaReducer })
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Produtos} />
                    <Route exact path="/sacola" component={Sacola} />
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
