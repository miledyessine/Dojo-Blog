
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    //let name='Mario';

    // const[name,setName]=useState('Mario');
    // const [age,setAge]=useState('35');

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
    // const handleClick=()=>{
    //     setName('Yessine');
    //     setAge('20');
    // }
    
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Change name</button> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs} title="All Blogs" /*handleDelete={handleDelete}*/></BlogList>
            // <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs"></BlogList>
        }
        </div>
    );
}

export default Home;