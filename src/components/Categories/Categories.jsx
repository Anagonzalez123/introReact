import './Categories.css';
import { Link } from 'react-router-dom';

export function Categories() {
    // Definí un arreglo con las categorías y sus ids para usar en los links
    const categories = [
        { id: 1, name: "Platos", img: "https://res.cloudinary.com/dkv58dvqy/image/upload/v1750794618/platoscategorias_n4xlzb.jpg" },
        { id: 3, name: "Tazas", img: "https://res.cloudinary.com/dkv58dvqy/image/upload/v1750794619/tazacategorias_p3dip8.jpg" },
        { id: 2, name: "Tablas", img: "https://res.cloudinary.com/dkv58dvqy/image/upload/v1750795909/tabla-cocina-para-picar-D_NQ_NP_660090-MLM25728906139_072017-F_g3o4o9.jpg" }
    ];

    return (
        <div className="categories">
            <h2>Categorías</h2>
            <div className="categoriesContainers">
                {categories.map(category => (
                    <Link to={`/categories/${category.id}`} key={category.id} className="categoryLink">
                        <div>
                            <img src={category.img} alt={`${category.name} fondo blanco`} />
                            <strong>{category.name}</strong>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
