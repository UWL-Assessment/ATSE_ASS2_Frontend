import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import { BsLockFill } from "react-icons/bs";
import Logo from "./../../../assets/imges/dummy-logo-02.png";

const header = [
  {
    name: "Categories",
    child: [
      {
        name: "Science",
        slug: "/science",
      },
      {
        name: "Engineering",
        slug: "/engineering",
      },
      {
        name: "Economics",
        slug: "/economics",
      },
      {
        name: "Finance",
        slug: "/finance",
      },
      {
        name: "Pshycology",
        slug: "/pshycology",
      },
    ],
  },
  {
    name: "About Us",
    slug: "/home",
  },
  {
    name: "Contact",
    slug: "/home",
  },
];

const HomeHeader = () => {
  return (
    <Flex justify="space-between" align="center">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" height={60} />
        </Link>
      </div>
      <Flex align="center">
        <ul className="main-menu">
          <li className="menu-item">
            <Link to="/home">Home</Link>
          </li>
          {header.map((item, i) => {
            console.log("Item", item.name);
            if (item.child) {
              return (
                <li key={i + "__"} className="menu-item">
                  <span>{item.name}</span>
                  <ul className="submenu">
                    {item.child.map((subMenuItem, i) => {
                      return (
                        <li key={i + "_"}>
                          <Link to={subMenuItem.slug}>{subMenuItem.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={i} className="menu-item">
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              );
            }
          })}
        </ul>
        <div>
          <Button type="link" icon={<BsLockFill />}>
            Login
          </Button>
        </div>
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
