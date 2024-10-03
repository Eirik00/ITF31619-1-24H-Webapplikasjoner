import Student from "./Student";
import { StudentType } from "../types";

type GridProps = {
    classList: StudentType[];
    onRemoveStudent: (id: number) => void;
    children: React.ReactNode
}


export default function Grid({classList,  onRemoveStudent, children}: GridProps){
    return(
        <>
            <section className="grid">
                {classList?.map((student, index) =>
                    <Student key={index} name={student.name} id={student.id} onRemoveStudent={onRemoveStudent} />
                )}
            </section>
            {children}
        </>
    )
}