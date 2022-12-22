import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebase } from "config/firebase";

type CallbackFunctions = {
  onStart?: Function
  onProgress?: Function
  onComplete?: Function
  onFail?: Function
}

class StorageService {
  // private static storageService: StorageService = storage;

  static getBlobFromURI = async (uri: string) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(error) {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null); firebase
    });

    return blob;
  }

  static uploadSingleImageFile = async (
    fileBlob: Blob, name: string, bucket: string,
    { onStart, onProgress, onComplete, onFail }: CallbackFunctions) => {
    const imageName = `${name}` + new Date().getTime();
    // const storageRef = ref(storage, `${bucket}/${imageName}`);

    // create file metadata
    const metadata = {
      contentType: 'image/jpeg'
    };

    onStart && onStart();

    // const uploadTask = storageRef
  };

  static uploadMultipleFiles = async () => {
    
  }
}

export default StorageService;