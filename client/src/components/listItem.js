import tickicon from './tickIcon'
import ProgressBar from './ProgressBar'
import TickIcon from './tickIcon';

const ListItem = ({ task }) => {
    return (
        <li>
            <div>
                <TickIcon />
                <p>{task.title}</p>
                <ProgressBar />
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    );
}

export default ListItem;
