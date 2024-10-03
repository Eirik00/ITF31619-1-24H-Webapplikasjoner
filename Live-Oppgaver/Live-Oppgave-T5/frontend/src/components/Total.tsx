import { StudentType } from "../types";
type TotalProps = {
    classList: StudentType[]
}


export default function Total({classList}: TotalProps) {
    return(
        <p>Total Students: {classList.length}</p>
    )
}