import axios from 'axios'
export function get(url,api,params){
    return	axios({
       method:'get',
       url:api,
       baseURL:url,
       params:params
   }).then(response => response.data).catch((err)=>{
       console.log(err)
   })
}

export function postJson(url,api,data){
	return axios({
		method:'post',
		url:api,
		baseURL:url,
		headers:{'Content-Type':'aplication/json'},
		data:data
	}).then(response => response.data).catch((err) => {
		console.log(err)
	})
}