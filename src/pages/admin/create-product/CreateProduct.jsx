import React, {useState} from 'react'
import CreateProducts from "../../../components/create-products/CreateProducts"

const CreateProduct = () => {
  const [reload, setReload] = useState(false);
  return (
    <div>
        <CreateProducts setReload={setReload} />
    </div>
  )
}

export default CreateProduct