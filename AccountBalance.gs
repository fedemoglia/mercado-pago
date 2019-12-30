/**
* Obtiene el monto total de la cuenta
* @customfunction
**/

function getMPAmount() {
  //Reemplazar por el id de tu usuario
  const userId = '12345678'
  //Reemplazar por el token de producción que se obtiene en https://www.mercadopago.com/mla/account/credentials
  const token = 'productionToken'
  const response = UrlFetchApp.fetch('https://api.mercadopago.com/users/' + userId + '/mercadopago_account/balance?access_token=' + token);
  const data = JSON.parse(response.getContentText());
  return Number(data.total_amount);
}
