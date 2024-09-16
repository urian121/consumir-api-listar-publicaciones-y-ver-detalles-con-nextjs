"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

// Función para obtener los detalles de un post específico
async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    console.log("Error en la petición al servidor");
    throw new Error("Error en la petición al servidor");
  }

  const data = await res.json();
  return data;
}

export default function Detalles({ params }) {
  const idPost = Number(params.id); // Obtener el ID del post desde los params
  const [post, setPost] = useState(null); // Cambiamos "user" por "post"
  const [error, setError] = useState(null);

  // Fetch de los datos del post
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await getPostData(idPost);
        setPost(data);
      } catch (error) {
        setError("Error fetching post data");
      }
    };

    fetchPostData();
  }, [idPost]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="col-md-10 mb-4">
      <div className="card h-100" style={{ borderRadius: "0px" }}>
        <div className="card-body">
          <h3 className="card-title fw-bold">{post.title}</h3>
          <p className="card-text">{post.body}</p>
        </div>
        <div className="card-footer">
          <Link href={`/posts/`} className="btn btn-primary">
            <IoArrowBack /> &nbsp; Volver atras
          </Link>
        </div>
      </div>
    </div>
  );
}
