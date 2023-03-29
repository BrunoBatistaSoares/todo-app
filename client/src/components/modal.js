import { useState } from "react"

const Modal = () => {

    const mode = 'edit'
    const editMode = mode === 'edit' ? true : false

    const [data, setData] = useState({
        userEmail: "",
        title: "",
        progress: "",
        date: editMode ? "" : new Date()
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
        console.log(data)
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div>
                    <h3>lets {mode} your task</h3>
                    <button>X</button>
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
                    <input className={mode} type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Modal;
