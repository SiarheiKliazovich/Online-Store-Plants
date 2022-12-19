import "./Sorting.scss";

const Sorting = () => {
  return (
    <div className="sorting__wrapper">
      <form className="form-sort" action="">
        <select className="select orderby" name="" id="">
          <option value="rating">Rating sorting</option>
          <option value="price">Price sorting</option>
          <option value="category">Category sorting</option>
        </select>
      </form>
    </div>
  );
};

export default Sorting;
