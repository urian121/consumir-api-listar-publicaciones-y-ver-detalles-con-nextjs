import { useEffect, useState } from "react";

// Función para obtener los comentarios de un post específico
async function getComments(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  if (!res.ok) {
    console.log("Error en la petición de comentarios");
    return [];
  }

  const data = await res.json();
  return data;
}

export default function Comentarios({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments(postId);
        setComments(data);
      } catch (error) {
        setError("Error fetching comments");
      }
    };

    fetchComments();
  }, [postId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (comments.length === 0) {
    return <p>No hay comentarios</p>;
  }

  return (
    <div className="mt-5 mb-3">
      <h2 className="fw-bold text-center">
        {" "}
        Lista de Comentarios para el Post # {postId} 🚀
        <hr />
      </h2>
      <ul className="list-group">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">
            <h5 className="fw-bold text-capitalize">{comment.name}</h5>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
