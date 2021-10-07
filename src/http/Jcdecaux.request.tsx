import axios from "axios";

export function JcdecauxRequest(){
    axios.get(`${process.env.REACT_APP_JCD_URL}`).then(
        (R)=> {
            console.log(R.data)
            return R.data
        }
    )
}