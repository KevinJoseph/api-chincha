// index.mjs
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

// Datos de ejemplo
let articulos = [
  { id: 1, title: 'Artículo 1', description: 'Contenido del artículo 1', image: 'https://chinchademisamores.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-17.39.24.jpeg' },
  { id: 2, title: 'Artículo 2', description: 'Contenido del artículo 2', image: 'https://chinchademisamores.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-17.39.24.jpeg' },
];

// Obtener todos los artículos
app.get('/articles', (req, res) => {
  res.json(articulos);
});

// Obtener un artículo por ID
app.get('/article/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const articulo = articulos.find(item => item.id === id);
  
    if (articulo) {
      res.json(articulo);
    } else {
      res.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
