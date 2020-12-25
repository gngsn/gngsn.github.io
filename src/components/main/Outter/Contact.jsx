import { Input, TextareaAutosize } from "@material-ui/core";
import ContactForm from './ContactForm';
import FloatIcon from '../FloatIcon';

const contact = () => {
    return (
        <div className="contact">
            <ContactForm />
            <FloatIcon />
        </div>
    )
}

export default contact;