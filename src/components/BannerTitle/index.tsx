import "./BannerTitle.scss";

const BannerTitle = (props: { title: string }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{props.title}</h1>
    </div>
  );
};

export default BannerTitle;
