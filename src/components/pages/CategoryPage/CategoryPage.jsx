import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';



function CategoryPage() {
  const { id } = useParams(); // Para leer el ID que venga por URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9091/articles/by_category/${id}`)
        .then((res) => res.json())
        .then((data) => setArticle(data))
        .catch((error) => {
          console.error("Error al cargar artículos:", error);
          setArticle([]);
        });
    }
  }, [id]);

  if (!article) return <p>Cargando artículos...</p>;

  return (
    <div>
      <h2>Artículos de la categoría {id}</h2>
      
      {article.length === 0 && <p>No hay artículos en esta categoría.</p>}
      {article.map((article) => (
        <div key={article.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={article.imageUrl} alt={article.name} style={{ width: "150px" }} />
          <h3>{article.name}</h3>
          <p>{article.description}</p>
          <p><b>Precio: </b>${article.price}</p>
          <p><b>Stock: </b>{article.stock}</p>
          
          <Link 
              key={"ArticleCard-" + article.id}
              to={"/articles/" + article.id}>
                <Button size="small" color="inherit" variant="contained">Ver detalle</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;


