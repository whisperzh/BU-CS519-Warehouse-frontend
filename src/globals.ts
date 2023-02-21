/**
 * This file can be used to store global variables that you need to access across multiple places.
 * We've put a few here that we know you will need.
 * Fill in the blank for each one
 */
import axios, { AxiosHeaders } from 'axios';
export const BASE_API_URL = "https://519assignment4.azurewebsites.net/api/";
// You can get this from Piazza
// This is a helper function to generate the headers with the x-functions-key attached

export const getCode="Yt2rJ0q2lCtqTsjsiKbcUmG_6_5Pz4HfbDrrIrazEl93AzFu0jOx7w==";

export const postCode='OKv-EePp3jgVvEwp7npapgd66BMXkxErvTz9lWM7jFk0AzFuyHF4tg==';

export const GET_DEFAULT_HEADERS = () => {
  var headers = new Headers();
  headers.append('code','Yt2rJ0q2lCtqTsjsiKbcUmG_6_5Pz4HfbDrrIrazEl93AzFu0jOx7w==');
  return headers;
};

export const POST_DEFAULT_HEADERS = () => {
  var headers = new Headers();
  headers.append('code','OKv-EePp3jgVvEwp7npapgd66BMXkxErvTz9lWM7jFk0AzFuyHF4tg==');
  return headers;
};

// export const GET_DEFAULT_HEADERS_AXIOS = () => {
//   var headers = new AxiosHeaders();
//   headers.set('accept','application/json');
//   headers.set('x-functions-key',TOKEN);
//   // You will need to add another header here
//   // If you do not, the API will reject your request (:
//   return headers;
// };