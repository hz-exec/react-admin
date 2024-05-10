import { Link } from "react-router-dom";
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline } from "@mui/icons-material";
import { Report } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <span className="sidebarTitle">Dashboard</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <span className="sidebarTitle">Quick Menu</span>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <span className="sidebarTitle">Notifications</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon"/>
                        Feekback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <span className="sidebarTitle">Staff</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
