import Image from "next/image";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h1 className="text-center fw-bold mb-5">
            Domina la forma de consumir API, listar publicaciones y ver detalles con Next.js
            <hr />
          </h1>

          <Image className="img-fluid" src="/nextjs.webp" alt="Vercel Logo" width={150} height={40} />
        </div>
      </div>
    </div>
  );
}
