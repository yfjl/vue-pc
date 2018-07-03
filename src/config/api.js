import fetch from './fetch.js'


/**
 * list->活动管理
 * @param {*} params 
 */
const getWeather =  params=>{
  return fetch({
    url:'weatherApi',
    method:'get',
    params
  })
}





 
const apiList = {
  getWeather
}

export default apiList
