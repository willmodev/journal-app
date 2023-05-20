import sha1 from 'sha1';
import { processUrlImg } from './processUrlImg';

export const fileDelete = async (imgUrl) => {

    const apiSecret = import.meta.env.VITE_API_SECRET;
    const apiKey = import.meta.env.VITE_API_KEY;

    const public_id = processUrlImg(imgUrl);

    const URL_CLOUDINARY = 'https://api.cloudinary.com/v1_1/dzdt0yflo/image/destroy';

    const timestamp = `${new Date().getTime()}`;
    const signature = `public_id=${public_id}&timestamp=${timestamp}${apiSecret}`;

    const shaCode = sha1(signature);

    const formData = new FormData();
    formData.append("public_id", public_id);
    formData.append("api_key", apiKey);
    formData.append("signature", shaCode);
    formData.append("timestamp", timestamp);

    try {
        const resp = await fetch(URL_CLOUDINARY, {
            method: "POST",
            body: formData,
        });

        if (!resp.ok) throw new Error(" No se pudo eliminar la imagen");

    } catch (error) {

        console.log(error);
        throw new Error(error.message);
    }


}
