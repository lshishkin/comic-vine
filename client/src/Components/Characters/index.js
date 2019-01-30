import React, { Component, Fragment } from 'react';
import { Link, Route, Redirect } from "react-router-dom"
import { NotFound } from '../Errors'
import './index.scss'

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 6,
      loading: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {
        visible: prev.visible + 6,
        loading: true
      };
    });
  }
  componentDidUpdate() {
    if (this.state.loading) {
      this.setState(this.setState({ loading: false }))
    }

  }


  render() {
    console.log(this.props.items)
    return (
      <div className='wrap-content characters'>

        {this.props.items.slice(0, this.state.visible).map((item, index) => {
          return (
            <article key={index}>
              <Link to={`/${item.id}`}>

                <img src={item.image.small_url} />

              </Link>
              <div className='subscription'>
                <Link className='link-name' to={`/${item.id}`}>
                  <p className='article__name'>{item.name}</p>
                </Link>
                <p className='article__publisher'>{item.publisher.name}</p>
                <p className='article__issues'>{item.count_of_issue_appearances} issues</p>

              </div>

            </article>
          )
        })}

        {this.state.visible < this.props.items.length &&
          <div className="button-wrap"><button onClick={this.loadMore} type="button" >
            {this.state.loading ? "Loading" : "Load more"}
          </button></div>
        }

      </div>
    );
  }
}

