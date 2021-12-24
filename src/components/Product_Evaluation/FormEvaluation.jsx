import React, { Component } from 'react';

export default class FormEvaluation extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      evaluation: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.addEvaluation = this.addEvaluation.bind(this);
  }

      handleInput = ({ target }) => {
        const { name, value } = target;
        this.setState(() => ({ [name]: value }));
      };

      addEvaluation = () => {
        const { email, message } = this.state;
        if (email) {
          this.setState((input) => ({
            evaluation: [...input.evaluation, { email, message }],
          }));
        }
      }

      render() {
        const { email, message } = this.state;
        return (
          <div>
            <form>
              <label htmlFor="email">
                <input
                  name="email"
                  placeholder="Email"
                  onChange={ (event) => this.handleInput(event) }
                  value={ email }
                />
              </label>
              <label htmlFor="message">
                <textarea
                  data-testid="product-detail-evaluation"
                  name="message"
                  placeholder="Mensagem (opcional)"
                  onChange={ (event) => this.handleInput(event) }
                  value={ message }
                />
              </label>
              <button
                type="submit"
                onClick={ (event) => this.addEvaluation(event) }
              >
                Avaliar
              </button>
            </form>
          </div>
        );
      }
}
