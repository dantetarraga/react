import { Contact } from "../models/Contact";
import ComponentA from "./ComponentA";
import { useState } from "react";

function ContactList({ }) {
    const contact = new Contact('Mario', 'Lopez', 'mario@example.com', true);
    const [connected, setConnected] = useState(contact.connected);

    const toggleState = () => {
        setConnected(!connected);
    }

    return (
        <div>
            <h2>Tus contactos:</h2>
            <ComponentA contact={contact} updateConnectedState={toggleState}></ComponentA>
        </div>
    );
}

export default ContactList;