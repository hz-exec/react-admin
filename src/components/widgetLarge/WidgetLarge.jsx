import "./widgetLarge.css";

export default function WidgetLarge() {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>;
    }

  return (
    <div className="widgetLarge">
        <h3 className="widgetLargeTitle">Latest transactions</h3>
        <table className="widgetLargeTable">
            <tr className="widgetLargeTr">
                <th className="widgetLargeTh">Customer</th>
                <th className="widgetLargeTh">Date</th>
                <th className="widgetLargeTh">Amount</th>
                <th className="widgetLargeTh">Status</th>
            </tr>
            <tr className="widgetLargeTr">
                <td className="widgetLargeUser">
                    <img 
                     src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                     alt="" 
                     className="widgetLargeImg" />
                    <span className="widgetLargeName">Susan Carol</span>
                </td>
                <td className="wdigetLargeDate">2 Jun 2021</td>
                <td className="widgetLargeAmount">$122.00</td>
                <td className="widgetLargeStatus">
                    <Button type="Approved"></Button>
                </td>
            </tr>
            <tr className="widgetLargeTr">
                <td className="widgetLargeUser">
                    <img 
                     src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                     alt="" 
                     className="widgetLargeImg" />
                    <span className="widgetLargeName">Susan Carol</span>
                </td>
                <td className="wdigetLargeDate">2 Jun 2021</td>
                <td className="widgetLargeAmount">$122.00</td>
                <td className="widgetLargeStatus">
                    <Button type="Declined"></Button>
                </td>
            </tr>
            <tr className="widgetLargeTr">
                <td className="widgetLargeUser">
                    <img 
                     src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                     alt="" 
                     className="widgetLargeImg" />
                    <span className="widgetLargeName">Susan Carol</span>
                </td>
                <td className="wdigetLargeDate">2 Jun 2021</td>
                <td className="widgetLargeAmount">$122.00</td>
                <td className="widgetLargeStatus">
                    <Button type="Pending"></Button>
                </td>
            </tr>
        </table>
    </div>
  )
}
