import { Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Link from "next/link"
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import PhotoIcon from '@material-ui/icons/Photo';
import InboxIcon from '@material-ui/icons/Inbox';
import { toggleSidebar } from '../../redux/actions/globalActions';
import { useSelector } from "react-redux";
import { Slide } from "react-awesome-reveal";
import ContainerWrapper from "./ContainerWrapper";
import { Menu } from "@material-ui/icons";


const menus = [
    { to: "/", icon: <HomeIcon />, title: "Home" },
    { to: "/users", icon: < GroupIcon />, title: "Users" },
    { to: "/todo", icon: < LowPriorityIcon />, title: "Todos" },
    { to: "/photos", icon: < PhotoIcon />, title: "Photos" },
    { to: "/posts", icon: < InboxIcon />, title: "Posts" },
]

const Container = ({ children }) => {
    const isSidebarShow = useSelector(state => state.global.isSidebarShow);


    return (
        < ContainerWrapper >
            <div className={`sidebar ${isSidebarShow ? "show" : ""}`}>
                <h2>Menu</h2>
                <List>
                    {menus.map((v, i) => <Link href={v.to}>
                        <a>
                            <Slide delay={100 * i}>
                                <ListItem button>
                                    <ListItemIcon>{v.icon}</ListItemIcon>
                                    <ListItemText primary={v.title} />
                                </ListItem>
                            </Slide>
                        </a>
                    </Link>)}
                </List>
            </div>

            <div className="rightside">
                <header className="shadow p-3 mb-3">
                    <Button onClick={toggleSidebar}>
                        <Menu />
                    </Button>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>

        </ContainerWrapper >
    )
}
export default Container;
