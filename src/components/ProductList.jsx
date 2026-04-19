import FavoriteIcon from "./FavoriteIcon";

const ProductList = () => {
  return (
    <ul>
      <li>
        <div>
          <div>
            <FavoriteIcon />
            <img src="/img/farver.png" alt="Billede af faver" width={300} height={400} />
          </div>
          <h3>MÆRKE</h3>
          <h4>NAVN PÅ PRODUKT</h4>
          <p>PRIS</p>
        </div>
      </li>
    </ul>
  );
};

export default ProductList;
