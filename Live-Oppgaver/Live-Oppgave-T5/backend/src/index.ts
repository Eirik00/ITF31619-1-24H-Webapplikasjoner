import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const studentList = [
  {
    name: "Eirik",
    id: 1
  },
  {
    name: "Martin",
    id: 2
  },
  {
    name: "Sander",
    id: 3
  }
]


const app = new Hono()

app.use("/*", cors())

app.get('/api/students', (c) => {
  return c.json(studentList)
}).post(async (c) => {
  const newStudent = await c.req.json()
  try{
    studentList.push(newStudent)
    return c.json(studentList, {status: 201})
  }catch(err){
    return c.json({error: "Invalid Student"}, {status: 400})
  }
})

app.delete('/api/students/:id', async (c) =>{
  const id = c.req.param("id")
  studentList.splice(studentList.findIndex(obj => obj.id === eval(id)), 1)
  return c.json("student id:"+id+"was removed", {status: 200})
}).patch(async (c) => {
  const id = c.req.param("id")
  const updatedStudent = await c.req.json()
  try{
    studentList[studentList.findIndex((element) => element.id === eval(id))].name = updatedStudent.name
    return c.json(studentList, {status: 201})
  }catch(err){
    return c.json({error: "Invalid Student Id"}, {status: 400})
  }
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
