export const PUSH ="PUSH"

export const REGAIN ="REGAIN";

export const FIRSTFILL ="FIRSTFILL"


export const push=(payload)=>{
    return {
        type:PUSH,
        payload
    }
}

export const regain =(payload)=>{

    return {
        type:REGAIN,
        payload
    }
}


export const firstfill =(payload)=>{

    return {
        type:FIRSTFILL,
        payload
    }
}