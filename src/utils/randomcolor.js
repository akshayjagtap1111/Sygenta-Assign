
import {useCallback} from "react"

export const useRandomColor=(n)=>{
     const color = useCallback(() => {
        let r = Math.floor(Math.random() * 101);
        let g = Math.floor(Math.random() * 101);
        let b = Math.floor(Math.random() * 101);
    
        const back_color = `rgb(${r + Math.random() * 101},${
          g + Math.random() * 101
        },${b + Math.random() * 101})`;
    
        return back_color;


      });


      const makeArr = (n) => {
        let resArr = [];
        for (let i = 0; i < n; i++) {
          let obj = {
            id: i,
            color: color(),
          };
          resArr.push(obj);
        }
        return resArr;
      };

      return makeArr(n)
}



 