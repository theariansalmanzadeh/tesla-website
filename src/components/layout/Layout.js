import Menu from "../layout/Header";
import Header from "../layout/Menu/Menu";

function Layout(props) {
  return (
    <div>
      <Header />
      {<Menu />}
      {props.children}
    </div>
  );
}

export default Layout;
