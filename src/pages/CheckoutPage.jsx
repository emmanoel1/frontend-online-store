import React, { Component } from 'react';

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { fullName, email, cpf, phone, cep, address } = this.state;

    return (
      <main>
        <section>
          <h2>Informações do Comprador</h2>
          <form>
            <label htmlFor="fullName">
              <input
                data-testid="checkout-fullname"
                name="fullName"
                placeholder="Nome Completo"
                value={ fullName }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <label htmlFor="email">
              <input
                data-testid="checkout-email"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <label htmlFor="cpf">
              <input
                data-testid="checkout-cpf"
                name="cpf"
                placeholder="CPF"
                value={ cpf }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <label htmlFor="phone">
              <input
                data-testid="checkout-phone"
                name="phone"
                placeholder="Telefone"
                value={ phone }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <label htmlFor="cep">
              <input
                data-testid="checkout-cep"
                name="cep"
                placeholder="CEP"
                value={ cep }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <label htmlFor="address">
              <input
                data-testid="checkout-address"
                name="address"
                placeholder="Endereço"
                value={ address }
                onChange={ (event) => this.handleChange(event) }
              />
            </label>
            <button
              type="submit"
            >
              Comprar
            </button>
          </form>
        </section>
      </main>
    );
  }
}
