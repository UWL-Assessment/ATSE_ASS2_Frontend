import { Button, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../../assets/imges/dummy-logo-02.png";
import { FiLogOut } from "react-icons/fi";

const header = [
  {
    name: "Categories",
    child: [
      {
        name: "Accounting",
        slug: "/accounting",
      },
      {
        name: "Art",
        slug: "/art",
      },
      {
        name: "Biology",
        slug: "/biology",
      },
      {
        name: "Business",
        slug: "/business",
      },
      {
        name: "Computer Science",
        slug: "/computerScience",
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
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // or navigate("/") to go to homepage
  };

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
          <Button
            type="link"
            icon={<FiLogOut />}
            style={{ color: "red" }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
