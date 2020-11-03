import axios from "axios";


function getList(cb){
    axios.get("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10").then(result=>{
 
 result=result.data;
   console.log(result)
    cb(result.records)
    }).catch(e=>{
        console.log(e);
      cb("error")
    })
}


export default getList;