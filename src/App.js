import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

// function App() {
//   React.useEffect(() => {
// axios.get('http://localhost:3000/db.json').then(({ data }) => {
//   setPizzas(data.pizzas);
// });
//   }, []);
//   return;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
