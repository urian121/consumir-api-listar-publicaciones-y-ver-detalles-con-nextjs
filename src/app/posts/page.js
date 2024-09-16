import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";

async function getPosts() {
  const url_posts = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.get(url_posts);
    return response.data;
  } catch (error) {
    console.error("Error en la petición al servidor", error);
    // Puedes devolver un array vacío o manejar el error de otra manera
    return [];
  }
}

export default async function Post() {
  const data = await getPosts();

  return (
    <>
      <h2 className="text-center fw-bold mb-4">Lista de Posts Recientes</h2>
      <hr />

      {data.map((post) => (
        <div key={post.id} className="col-md-10 mb-4">
          <div className="card h-100" style={{ borderRadius: "0px" }}>
            <div className="card-body">
              <h3 className="card-title fw-bold text-capitalize">{post.title}</h3>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
              <Link href={`/posts/${post.id}`} className="btn btn-primary">
                Ver Detalles &nbsp;
                <GrLinkNext />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
