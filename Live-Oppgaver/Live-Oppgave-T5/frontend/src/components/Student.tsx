import { MouseEvent } from "react";
import Avatar from "./Avatar";

type StudentProps = {
    id: number;
    name: string;
    onRemoveStudent: ( id: number) => void;
}

export default function Student({id, name, onRemoveStudent}: StudentProps) {
    const handleMouseEnterEvent = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
    }

    const handleDeleteAnchor = (e: MouseEvent<HTMLAnchorElement>) => {
        onRemoveStudent(id)
    }
    return(
        <article onMouseEnter={handleMouseEnterEvent}>
            <Avatar name={name} />
            <div className="name">
                <h2>{name}</h2>
                <p>Student Id: {id}</p>
            </div>
            <a className="" onClick={handleDeleteAnchor}>X</a>
        </article>
    )
}