export function formatMessageTime(date){
    return new Date(date).toLocaleString("en-IN",{
        hour:"2-digit",
        minute:"2-digit",
        hour12:false
    })
}