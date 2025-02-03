import UserData from "@/utils/user.json";
import "@/assets/styles.css";

export default function Index() {
    const UserTable = UserData.users
    return(
        <table>
            <tbody>
                {UserTable.map((user, index)=>(
                <tr key={index}>
                    <td>
                        <img src={user.picture} alt="user-image"/>
                    </td>
                    <td className="td-name">{user.name} </td>
                    <td className="gray-text">$<span></span></td>
                    <td className={user.balance < 0 ? "red-text": user.balance}>{user.balance}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
// 25:01:63