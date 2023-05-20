

export const fileUpload = async(file) => {


    if (!fileUpload) throw new Error('No se cargó ningún archivo');

    const URL_CLOUDINARY = 'https://api.cloudinary.com/v1_1/dzdt0yflo/upload';

    const fromDate = new FormData();

    fromDate.append('upload_preset', 'react-jornal');
    fromDate.append('file', file);


    try {
        
            const resp = await fetch(URL_CLOUDINARY, {
                method: 'POST',
                body: fromDate
            })
        
        
            if (!resp.ok) throw new Error('Error al cargar el archivo.');
        
            const data = await resp.json();
        
            return data.secure_url;

    } catch (error) {

        console.log(error);
        throw new Error( error.message );
        
    }

    

}