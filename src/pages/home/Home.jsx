import { useState } from "react";
import Products from "../../components/Products/Products";

function Home() {
  const [reload, setReload] = useState(false);
  return (
    <>
      <Products reload={reload} setReload={setReload} />
      {/* <ManageProduct reload={reload} setReload={setReload}/> */}
    </>
  );
}

export default Home;