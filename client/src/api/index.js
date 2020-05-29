import { BASE_API } from './config';

class Api {

  async getOrder() {
    let result = null;
    try {
      let res = await fetch(`${BASE_API}/api/v2/orders/2117155815564`,
        {
          method: 'GET',
          headers: {
            Authorization: process.env.REACT_APP_API_TOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const dataString = await res.text();
      const data = JSON.parse(dataString);
      

      if (data.success) {
        result = {
          items: data.order.items,
          number: data.order.number,
          currency: data.order.currency,
          error: false,
        }
      }

      } catch (e) {
        console.log(e);
        if (e.message.match(/Network request failed/)) {
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        } else {
          // por ahora tratar todos los errores con un mensaje generico
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        }
      }

    return result;
  }

}

export default new Api();
