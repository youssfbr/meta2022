import axios from 'axios';
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from '../../utils/request';
import "./styles.css";

type Props = {
  saleId: number;
}

function NotificationButton( {saleId} : Props) {
  return (
    <div className="red-btn-notification" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

function handleClick(id: number) {
  axios(`${BASE_URL}/api/v1/sales/${id}/notification`)
    .then(response => {
      console.log("SUCESSO");      
    });      
}

export default NotificationButton;
