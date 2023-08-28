import { photos, products } from "./axios"

export async function getProducts() {
    try {
        return await products.get("/products");
    } catch (error) {
        console.log("failed while fetching products from api",error)
    }
}

export async function getPhotos() {
    try {
      return await photos.get('/photos');
    } catch (error) {
      console.log('Failed while fetching photos from API', error);
      throw error;
    }
  }