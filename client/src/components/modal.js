import { useState } from "react"

const Modal = ({ mode, setShowModal, getData, task }) => {

    const editMode = mode === 'edit' ? true : false

    const [data, setData] = useState({
        user_email: editMode ? task.user_email : 'aa@aa',
        title: editMode ? task.title : '',
        progress: editMode ? task.progress : 50,
        date: editMode ? "" : new Date()
    })

    const postData = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        try {
            const response = await fetch('http://localhost:8000/todos', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                console.log(response);
                setShowModal(false);
                getData();
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    const editData = async (e) => {
        e.preventDefault();
        try {
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div>
                    <h3>lets {mode} your task</h3>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <form>
                    <input
                        required
                        placeholder="task go here "
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <input
                        type="range"
                        min='0'
                        max="100"
                        name="progress"
                        value={data.progress}
                        onChange={handleChange}
                    />
                    <input className={mode} type="submit" onClick={editMode ? '' : postData} />
                </form>
            </div>
        </div>
    );
}

export default Modal;
