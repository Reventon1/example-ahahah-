import React, {useState} from 'react';
import "./form.css";

function Form() {
    const [countMassage, setCountMassage] = useState(0);
    return(
        <div className="Form_box">
            <div className="Form_title">
                Сообщения {countMassage}
            </div>
            <div className="Box_massages"></div>
            <div className="Box_send">
                <label>Имя</label>
                <input></input>
                <label>Сообщение</label>
                <input></input>
                <button>Добавить</button>
            </div>
        </div>
    )
}

export default Form;