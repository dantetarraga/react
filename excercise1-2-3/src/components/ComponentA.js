import PropTypes from 'prop-types';
import { Contact } from '../models/Contact';
import { useState } from 'react';

const ComponentA = ({ contact, updateConnectedState }) => {
    const [connected, setConnected] = useState(contact.connected);

    const handleToggleState = () => {
        updateConnectedState(!contact.connected);
        setConnected(!connected)
    };

    return (
        <div>
            <h2>Información de Contacto:</h2>
            <p>Nombre: {contact.name}</p>
            <p>Apellido: {contact.last_name}</p>
            <p>Email: {contact.email}</p>
            <p>Conectado: {connected ? "Contacto En Línea" : "Contacto No Disponible"}</p>
            <button onClick={handleToggleState}>Cambiar Estado</button>
        </div>
    );
}

ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ComponentA;