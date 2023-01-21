export const ProductCard = ({ data, onNewItem }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="row p-2">
        <div className="card p-1" key={data.name}>
          <img
            src="/assets/dummy.jpg"
            className="card-img-top"
            alt="alternova"
          />
          <div className="card-body">
            <h6 className="card-title text-bold">{data.name}</h6>
            <span
              className={
                data.stock === 0
                  ? "fw-bold fs-4 text-danger"
                  : "fw-bold fs-4 text-success"
              }
            >
              {data.stock}
            </span>
            <button
              type="button"
              className={
                data.stock === 0
                  ? "btn btn-outline-danger disabled ms-5"
                  : "btn btn-outline-success ms-5"
              }
              onClick={() => onNewItem(data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
