import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css";

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle">New Join Members</span>
        <ul className="widgetSmallList">
            <li className="widgetSmallListItem">   
                <img 
                 src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                 alt="" 
                 className="widgetSmallImg" />
                 <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hongjing Zhou</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmallButton">
                    <Visibility className="widgetSmallIcon"/>Display
                 </button>
            </li>
            <li className="widgetSmallListItem">   
                <img 
                 src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                 alt="" 
                 className="widgetSmallImg" />
                 <div className="widgetSmallUser">
                    <span className="widgetSmallUsername">Hongjing Zhou</span>
                    <span className="widgetSmallUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmallButton">
                    <Visibility className="widgetSmallIcon"/>Display
                 </button>
            </li>
        </ul>
    </div>
  )
}
