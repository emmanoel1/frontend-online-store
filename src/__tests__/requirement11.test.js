import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';

describe(`11 - Avalie e comente acerca de um produto em sua tela de exibição detalhada`, () => {
  it('Avalia um produto na sua tela de detalhes', async () => {

    const evaluationContent = `Esta é uma avaliação sobre o produto realizada na
      tela de detalhe.`;
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch)
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getAllByTestId('product-detail-link')[0]);
    await waitFor(
      () => expect(screen.getByTestId('product-detail-name')).toHaveTextContent(
        mockedQueryResult.results[0].title,
      ),
    );
    fireEvent.change(
      screen.getByTestId('product-detail-evaluation'),
      { target: { value: evaluationContent } },
    );
    expect(screen.getByTestId('product-detail-evaluation')).toHaveValue(
      evaluationContent,
    );
  });
});
