const Header = (props) => {
  console.log(props);
  return (
    <div className="Header">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default Header;
