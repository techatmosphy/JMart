import { baseURL } from "../AppConstants";
import { RECORD_CREATED,RECORD_UPDATED, FAILURE_RESPONSE } from "../AppConstants";
export async  function deleteCategoryService(categoryId) {
    
    await  fetch(baseURL+path+'/'+categoryId,{
        method : 'delete'
    })
    .then((res) => res.json())
    .then((categoriesRes) => {
        console.log('categoriesRes ',categoriesRes)
    })
       .catch(error => {
            console.error("error : ", error);

        })
   
}