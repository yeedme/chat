import { data } from "autoprefixer"

const emailAndPasswordInputRule=/[^a-zA-Z0-9@.;',-=+_]/g
function getTime(){
    const now =new Date();
    const yy=now.getFullYear().toString().substring(-2);
    const mm = (now.getMonth() + 1).toString().padStart(2, '0');
    const dd=now.getDay().toString().padStart(2,'0');
    const hh=now.getHours().toString().padStart(2,'0')
    const ss=now.getSeconds().toString().padStart(2,'0')
    return `${yy}-${mm}-${dd} ${hh}:${ss}`
}


export {emailAndPasswordInputRule ,getTime }



