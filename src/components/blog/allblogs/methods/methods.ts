import { GetDataAPI } from "../../../../apihooks/apihooks"
import { getValueBykey } from "../../../../common_method/commonMethods";

const getBlog = async(page:number,set_blog_list:Function)=>{
const blogs = await GetDataAPI(`${process.env.REACT_APP_BLOGS_API_URL}/page/${page}`);
//console.log(blogs.data.blogs)
set_blog_list(getValueBykey('blogs',blogs) || null)
}


export {getBlog}