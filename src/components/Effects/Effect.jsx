import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import useInput from "../../hooks/useInput";
import './effect.css'
export default function Effect() {
    const input = useInput();

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    function openModal() {
        setModal(true);
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Open Information</Button>

            {modal && 
                <Modal open={modal}>
                    <h3 className="modal">hello from talgar</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda facilis consequuntur repellat inventore incidunt iusto corrupti dolore, dicta reprehenderit, porro aspernatur repudiandae modi nisi quae facere soluta ipsam quod?</p>
                    <Button onClick={() => setModal(false)}>X</Button>
                </Modal>
            }

            {loading && <p>Loading...</p>}

            {!loading && 
                <>
                    <input type="text" className="control" {... input} />
                    <ul className="input_ul">
                        {users
                            .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
                            .map((user)=> (<li key={user.id}>{user.name}</li>))}
                    </ul>
                </>
            }
        </section>
    );
}
