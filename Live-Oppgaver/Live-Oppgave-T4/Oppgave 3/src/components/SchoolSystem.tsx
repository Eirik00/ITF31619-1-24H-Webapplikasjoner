/*
	Eksempel på formatet på dataen
	[{id: '1', name: 'Lars', teacher: false}]
*/

// Startkode
import { useEffect, useState } from 'react';

interface IPerson {
    name: string;
}

const SchoolSystem = () => {
    const [personList, setPersonList] = useState<IPerson[]>([])

    useEffect(()=>{
        console.log(personList)
    }, [personList])

    
    return (
        <div>
        <h2>Antall: {personList.length}</h2>
        <button onClick={()=>setPersonList(prev => ([...prev, {name:"test"}]))}>Legg til</button>
        <button onClick={()=>setPersonList(prev => prev.slice(0, -1))}>Fjern</button>
        <button onClick={()=>setPersonList([])}>Tøm</button>
        </div>
    );
};

export default SchoolSystem;