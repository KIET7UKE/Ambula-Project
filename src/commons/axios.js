import axios from 'axios';

export const products = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: { "X-Custom-Header": "foobar" },
})

export const photos = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'X-Custom-Header': 'foobar' },
  });
