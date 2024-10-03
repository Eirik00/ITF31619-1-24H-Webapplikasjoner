type AvatarProps = {
    name: string;
}

export default function Avatar({name}: AvatarProps){
    return(
        <>
            <p className="avatar">{name.charAt(0).toUpperCase()}</p>
        </>
    )
}