import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import { StudentType } from "./types"
import Total from "./components/Total"
import AddStudentForm from "./components/AddStudentForm";


function App() {
  const [classList, setClassList] = useState<StudentType[]>([])
  
  const getStudentList = async ()=>{
    fetch("http://localhost:3000/api/students").then((res)=> res.json()).then((json) => setClassList(json))
  }
  
  const onAddStudent = async (data: StudentType)=>{
    try{
      await fetch("http://localhost:3000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    }catch(err){
      console.log(err)
    }
  }
  const onRemoveStudent = async (id: number) => {
    try{
      const res = await fetch("http://localhost:3000/api/students/"+id, {
        method: "DELETE"
      })
      console.log(res)
    }catch(err){
      console.log(err)
    }
    setClassList(prev=> (prev.filter(item => item.id !== id)))
  }

  useEffect(()=>{
    getStudentList()
  },[onAddStudent, onRemoveStudent])

  return (
    <>
      <h1>Start</h1>
      <Grid classList={classList} onRemoveStudent={onRemoveStudent}>
        <AddStudentForm onAddStudent={onAddStudent} studentList={classList}/>
      </Grid>
      <Total classList={classList} />
    </>
  )
}

export default App
