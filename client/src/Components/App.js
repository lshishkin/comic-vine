import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Characters from './Characters'
import Character from './Character'
import logo from './Logo.svg'
import './App.scss'

import { NotFound } from './Errors'

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: false
    };

  }
  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(res => {
        /*console.log(res.results);*/
        this.setState({
          items: res.results
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });

  }
  render() {
    const { items } = this.state;
    return <BrowserRouter>
      <Fragment>
        <header>
          <div className="wrap-header">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </header>
        <div className='content'>



          <Switch>
            <Route exact path='/'
              render={
                props => {
                  return <Characters {...props} items={items} />
                }
              }
            />
            <Route exact path='/:characterId'

              render={
                props => {

                  const characterId = props.match.params.characterId
                  let item = this.state.items.find(item => item.id == characterId)



                  return <Character  {...props} item={item} />
                }
              }
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  }
}

