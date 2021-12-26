import React, { Component } from 'react';
// import ShoppingCartPage from './ShoppingCartPage';

export default class CheckoutPage extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',

    };
  }

  render() {
    const { fullName, email, cpf, phone, cep, address } = this.state;
    return (
      <main>
        {/* <section>
          <ShoppingCartPage />
        </section> */}
        <section>
          <h2>Informações do Comprador</h2>
          <form>
            <label htmlFor="fullName">
              <input
                data-testid="checkout-fullname"
                name="fullName"
                placeholder="Nome Completo"
                value={ fullName }
              />
            </label>
            <label htmlFor="email">
              <input
                data-testid="checkout-email"
                name="email"
                placeholder="Email"
                value={ email }
              />
            </label>
            <label htmlFor="cpf">
              <input
                data-testid="checkout-cpf"
                name="cpf"
                placeholder="CPF"
                value={ cpf }
              />
            </label>
            <label htmlFor="phone">
              <input
                data-testid="checkout-phone"
                name="phone"
                placeholder="Telefone"
                value={ phone }
              />
            </label>
            <label htmlFor="cep">
              <input
                data-testid="checkout-cep"
                name="cep"
                placeholder="CEP"
                value={ cep }
              />
            </label>
            <label htmlFor="address">
              <input
                data-testid="checkout-address"
                name="address"
                placeholder="Endereço"
                value={ address }
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
