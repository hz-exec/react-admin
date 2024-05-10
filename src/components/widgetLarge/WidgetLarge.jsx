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
                     src="https://lh3.googleusercontent.com/fife/ALs6j_GdUvu3zDaZDKN6tju7WVl-fPbqApt99VBNYbkt1JrSzw4aNGp8oILXhAflFMTUA6ggZwiO7_Gm-4oec2RYNbKBP-iXN1D2UGaqkhHrxQ2i1UVB0Wf_R3YOnUwV1d68OKNd69hcjDgyi8cej06qD6cLSPy3RkAjmYj77gy9KIefzW9RMiyP0FjTot-sacN2eeB9iR1Ouen1fT6_VKB0y26VcB-kHn1Ov0W3G8uL4ClfYhwBxKUc_fsn1q4ldpgRNQzRuiTgNwaiCnL23lbzXrgePGyJ_dDx4KGC1gVA3ZNMSreOmHc92We2C4FOKwQvxN7D9g_FtIeTX2xfjNs3QlrPukBJxLxQhqNi_xVbXnvW6naU_MKZ6RX9y_7I8fVywU1r2cxB9vAvksIdfG123UZP3XsVM3Io2ztmODEnrqmGJIVNRfopjiIGUiVMeEn5F42w9JJ3nh7Nf4xMSegQyCwPQ6jE-RD6onpXjFPYg-B1u1dwYPcjnU_s-u2ql2kRjA1AXdqtTdNwQeBRUJoHBgRkUggCpBYrcy93Fol48XwZCfQfS36r4oyVZQnGeLrjaKLGHOU3XMRC6LYk-wcWipDOPlex09Dnttv3P6gmYDATtqBS0qed-FkhSfoBlwL8XJS7iwUjDcGk5669SNlILarWAFeheRmke1ykCdLUDg56HliE011aZvcivG0ihXUOjWfUHXinm5XhT3W5qPmYfgX2y9cyCa5TfwOtrsTLRv8dELmj8qVChseqDa3eq2Be6cdhICtVTcMtLVwTcKv3mWOdrQEhSJyhmrdEgmyE2ZSQgvfyNfJ9_BtAsWCqN2k-FXAqqjgrsDgaqgbZ74Tg-JNekqozatht-rxz4sFrsQzXQZpGFZrK0am1NNbW0JTucKA9gM312BD4yHPi66tzj1d5LjrPUFqLQQoPoMi2llluNqsqR6VRYszvozAZQS9rsx-g23-zUdCDug5Lv95H5v0zfq6sliae96KmMjfw9f8IO_M6B32CWigstac2fPQfompdjEOnc2Lrlb2MFfCEqzPQ3aMWcb3vMCeeaqYDPbesUxhXn2U6OMU4YBBCgoTpSaPffu9EJeO9qB0zuS3omge8_nGmqTOETWN6hAg2gvozfzlJh9DvoMudnp9IWv4JuJyYiIqvO8VZr6QslVYS2n9TQy25gORf5sHG96sS9Gmj505_SF3s6zVo5XjYoRHpcQrlwdKZKungqpAqUJmKko8sE2ntchpw70BzQtD5XYws-HLDDAOPT4J9YZxvRBI78A-DHZDiA6qyyVwkr8-NgUZfXc4ZY_wYT-L-OIKA9rBXr6jK7eVYoZ1XhVqf7Sief1CWFxiQHGxs83iK8-EyQItP58kaTjmATiFjjQw_E37dwS0gL7Bhbr8_Jwv95lQKLqdGFBmBSVIwI3GRrE7KZOYzUuh6UND4qxf0WlI=s32-c" 
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
                     src="https://lh3.googleusercontent.com/fife/ALs6j_GdUvu3zDaZDKN6tju7WVl-fPbqApt99VBNYbkt1JrSzw4aNGp8oILXhAflFMTUA6ggZwiO7_Gm-4oec2RYNbKBP-iXN1D2UGaqkhHrxQ2i1UVB0Wf_R3YOnUwV1d68OKNd69hcjDgyi8cej06qD6cLSPy3RkAjmYj77gy9KIefzW9RMiyP0FjTot-sacN2eeB9iR1Ouen1fT6_VKB0y26VcB-kHn1Ov0W3G8uL4ClfYhwBxKUc_fsn1q4ldpgRNQzRuiTgNwaiCnL23lbzXrgePGyJ_dDx4KGC1gVA3ZNMSreOmHc92We2C4FOKwQvxN7D9g_FtIeTX2xfjNs3QlrPukBJxLxQhqNi_xVbXnvW6naU_MKZ6RX9y_7I8fVywU1r2cxB9vAvksIdfG123UZP3XsVM3Io2ztmODEnrqmGJIVNRfopjiIGUiVMeEn5F42w9JJ3nh7Nf4xMSegQyCwPQ6jE-RD6onpXjFPYg-B1u1dwYPcjnU_s-u2ql2kRjA1AXdqtTdNwQeBRUJoHBgRkUggCpBYrcy93Fol48XwZCfQfS36r4oyVZQnGeLrjaKLGHOU3XMRC6LYk-wcWipDOPlex09Dnttv3P6gmYDATtqBS0qed-FkhSfoBlwL8XJS7iwUjDcGk5669SNlILarWAFeheRmke1ykCdLUDg56HliE011aZvcivG0ihXUOjWfUHXinm5XhT3W5qPmYfgX2y9cyCa5TfwOtrsTLRv8dELmj8qVChseqDa3eq2Be6cdhICtVTcMtLVwTcKv3mWOdrQEhSJyhmrdEgmyE2ZSQgvfyNfJ9_BtAsWCqN2k-FXAqqjgrsDgaqgbZ74Tg-JNekqozatht-rxz4sFrsQzXQZpGFZrK0am1NNbW0JTucKA9gM312BD4yHPi66tzj1d5LjrPUFqLQQoPoMi2llluNqsqR6VRYszvozAZQS9rsx-g23-zUdCDug5Lv95H5v0zfq6sliae96KmMjfw9f8IO_M6B32CWigstac2fPQfompdjEOnc2Lrlb2MFfCEqzPQ3aMWcb3vMCeeaqYDPbesUxhXn2U6OMU4YBBCgoTpSaPffu9EJeO9qB0zuS3omge8_nGmqTOETWN6hAg2gvozfzlJh9DvoMudnp9IWv4JuJyYiIqvO8VZr6QslVYS2n9TQy25gORf5sHG96sS9Gmj505_SF3s6zVo5XjYoRHpcQrlwdKZKungqpAqUJmKko8sE2ntchpw70BzQtD5XYws-HLDDAOPT4J9YZxvRBI78A-DHZDiA6qyyVwkr8-NgUZfXc4ZY_wYT-L-OIKA9rBXr6jK7eVYoZ1XhVqf7Sief1CWFxiQHGxs83iK8-EyQItP58kaTjmATiFjjQw_E37dwS0gL7Bhbr8_Jwv95lQKLqdGFBmBSVIwI3GRrE7KZOYzUuh6UND4qxf0WlI=s32-c" 
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
                     src="https://lh3.googleusercontent.com/fife/ALs6j_GdUvu3zDaZDKN6tju7WVl-fPbqApt99VBNYbkt1JrSzw4aNGp8oILXhAflFMTUA6ggZwiO7_Gm-4oec2RYNbKBP-iXN1D2UGaqkhHrxQ2i1UVB0Wf_R3YOnUwV1d68OKNd69hcjDgyi8cej06qD6cLSPy3RkAjmYj77gy9KIefzW9RMiyP0FjTot-sacN2eeB9iR1Ouen1fT6_VKB0y26VcB-kHn1Ov0W3G8uL4ClfYhwBxKUc_fsn1q4ldpgRNQzRuiTgNwaiCnL23lbzXrgePGyJ_dDx4KGC1gVA3ZNMSreOmHc92We2C4FOKwQvxN7D9g_FtIeTX2xfjNs3QlrPukBJxLxQhqNi_xVbXnvW6naU_MKZ6RX9y_7I8fVywU1r2cxB9vAvksIdfG123UZP3XsVM3Io2ztmODEnrqmGJIVNRfopjiIGUiVMeEn5F42w9JJ3nh7Nf4xMSegQyCwPQ6jE-RD6onpXjFPYg-B1u1dwYPcjnU_s-u2ql2kRjA1AXdqtTdNwQeBRUJoHBgRkUggCpBYrcy93Fol48XwZCfQfS36r4oyVZQnGeLrjaKLGHOU3XMRC6LYk-wcWipDOPlex09Dnttv3P6gmYDATtqBS0qed-FkhSfoBlwL8XJS7iwUjDcGk5669SNlILarWAFeheRmke1ykCdLUDg56HliE011aZvcivG0ihXUOjWfUHXinm5XhT3W5qPmYfgX2y9cyCa5TfwOtrsTLRv8dELmj8qVChseqDa3eq2Be6cdhICtVTcMtLVwTcKv3mWOdrQEhSJyhmrdEgmyE2ZSQgvfyNfJ9_BtAsWCqN2k-FXAqqjgrsDgaqgbZ74Tg-JNekqozatht-rxz4sFrsQzXQZpGFZrK0am1NNbW0JTucKA9gM312BD4yHPi66tzj1d5LjrPUFqLQQoPoMi2llluNqsqR6VRYszvozAZQS9rsx-g23-zUdCDug5Lv95H5v0zfq6sliae96KmMjfw9f8IO_M6B32CWigstac2fPQfompdjEOnc2Lrlb2MFfCEqzPQ3aMWcb3vMCeeaqYDPbesUxhXn2U6OMU4YBBCgoTpSaPffu9EJeO9qB0zuS3omge8_nGmqTOETWN6hAg2gvozfzlJh9DvoMudnp9IWv4JuJyYiIqvO8VZr6QslVYS2n9TQy25gORf5sHG96sS9Gmj505_SF3s6zVo5XjYoRHpcQrlwdKZKungqpAqUJmKko8sE2ntchpw70BzQtD5XYws-HLDDAOPT4J9YZxvRBI78A-DHZDiA6qyyVwkr8-NgUZfXc4ZY_wYT-L-OIKA9rBXr6jK7eVYoZ1XhVqf7Sief1CWFxiQHGxs83iK8-EyQItP58kaTjmATiFjjQw_E37dwS0gL7Bhbr8_Jwv95lQKLqdGFBmBSVIwI3GRrE7KZOYzUuh6UND4qxf0WlI=s32-c" 
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
