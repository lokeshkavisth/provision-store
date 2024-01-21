const ProductCard = (props) => {
  const { src = "", title = "", saleType = "" } = props;

  return (
    <div className="card w-full bg-base-100 min-h-40 shadow-xl image-full ">
      <figure>
        <img src={src} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{saleType}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
