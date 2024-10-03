import { useState } from "react"
import { StudentType } from "../types";

type AddStudentFormProps = {
    onAddStudent: (data: StudentType) => void;
    studentList: StudentType[];
}

export default function AddStudentForm({onAddStudent, studentList}: AddStudentFormProps){
    const [studentName, setStudentName] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setStudentName(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddStudent({name: studentName, id: studentList.length == 0 ? 
            1 : studentList[studentList.length-1].id+1})
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="studName" onChange={handleChange} />
            <label htmlFor="studName" >Student Name:</label>
            <input type="submit" />
        </form>
    )
}