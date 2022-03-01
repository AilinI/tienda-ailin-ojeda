import OrderForm from "../OrderForm/OrderForm"
import "../Contact/Contact.css"

const Contact =() =>{
    return(
        <div className="contact-container">
            <div className="contact-ms">
                <OrderForm />
            </div>
            <div className="contact-ms">
                <textarea className="contact-box" placeholder="    Dejanos tu consulta en esta cajita"></textarea>
            </div>
        </div>
    )
}

export default Contact