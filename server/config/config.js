//----------------------------------------
//-               PUERTO                 -
//----------------------------------------
process.env.PORT = process.env.PORT || 3000;


//----------------------------------------
//-              Entorno                 -
//----------------------------------------
process.env.NODE_DEV = process.env.NODE_DEV || 'dev'

//----------------------------------------
//-              Entorno                 -
//----------------------------------------
let urlDB;

// Si quiero que se conecte a la base en www tengo que comentar 
// desde la linea 18 hasta la 23 Menos la linea 22
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://fernando:IvQxiZP1BiI5eBD2@cluster0.hchvp.mongodb.net/cafe';
}

process.env.URLDB = urlDB;