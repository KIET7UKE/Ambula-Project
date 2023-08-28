import { useEffect } from 'react';
import { getPhotos } from '../../commons/globalFunctions';
import { useAtom } from 'jotai';
import { photosList } from '../../store/store';

function PhotosAPI() {
  const [photos, setPhotos] = useAtom(photosList);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await getPhotos();
        setPhotos(response.data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }

    fetchPhotos();
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Random Photos</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-gray-600">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotosAPI;
