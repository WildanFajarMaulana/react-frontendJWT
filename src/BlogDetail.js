import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams = useParams();
  return (
    <>
      <h1>blog detail</h1>
      <p>halo ini detail {urlParams.slug}</p>
    </>
  );
}
