import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../ui";
import { ProductCard } from "./";

export const Products = ({ onNewItem }) => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetch("/assets/initial.json");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input
            className="form-control me-2 mt-2"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <div className="row">
          {isLoading ? (
            <Loading />
          ) : (
            data &&
            data.products
              .filter((asd) => asd.name.toLowerCase().includes(query))
              .map((i) => (
                <div className="col-md-6 col-xs-12" key={i.name}>
                  <ProductCard data={i} onNewItem={onNewItem} />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
