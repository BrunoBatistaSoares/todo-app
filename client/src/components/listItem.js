import ProgressBar from './ProgressBar'
import TickIcon from './tickIcon';
import { useState } from "react"
import Modal from './modal';

const ListItem = ({ task, getData }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <li>
            <div>
                <TickIcon />
                <p>{task.title}</p>
                <ProgressBar />
            </div>
            <div>
                <button onClick={() => setShowModal(true)}>Edit</button>
                <button>Delete</button>
            </div>
            {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task} />}
        </li>
    );
}

export default ListItem;
