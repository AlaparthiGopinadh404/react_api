import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  var [data,setData]= useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(json=>setData(json))
   },[])
   var[comments,setComments]= useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(json=>setComments(json))
   },[])
   var[albums,setAlbums]=useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res=>res.json())
    .then(json=>setAlbums(json))
   },[])
   var[photos,setPhotos]= useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res=>res.json())
    .then(json=>setPhotos(json))
   },[])
   var [todos,setTodos]=useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(json=>setTodos(json))
   },[])
   var [users,setUsers]=useState([''])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(json=>setUsers(json))
   },[])
   function handlechange(e){
     setNum(e.target.value)
     console.log(num)
     setTem(photos.slice(0,num))
   }
   var[num,setNum]=useState([''])
   var[tem,setTem] =useState([''])

  return (
    <div>
      <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">POSTS</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Comments</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Albums</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Photos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Todos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="users-tab" data-bs-toggle="tab" data-bs-target="#users-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Users</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
  <h2 className='text-center'>Posts</h2>
    <div className="d-flex flex-wrap justify-content-center">
    {
      data.map((a,i)=>{
        return <div className='w-25 m-1 border border-3 p-2'>
        
          <h5>ID:{a?.id}</h5>
         <h4>Tittle:{a?.title}</h4> 
         <p><b>Body:</b>{a?.body}</p> 
          </div>
      })
    }
    </div>
  </div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
  <h2 className='text-center'>Comments</h2>
  <div className="d-flex flex-wrap justify-content-center">
    {
      comments.map((k,i)=>{
        return <div className='w-25 m-1 border border-3 p-2'>
          <p>ID:{k?.id}</p>
          <h5>Name:{k?.name}</h5>
          <p>Email:{k?.email}</p>
          <p>Body:{k?.body}</p>
        </div>
      })
    }
    </div>
    
  </div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
  <h2 className='text-center'>Albums</h2>
  <div className="d-flex flex-wrap justify-content-center">
   {
     albums.map((g,i)=>{
      return <div className='w-25 border border-2 m-2 p-2'>
        <p>ID:{g?.id}</p>
        <h5>{g?.title}</h5>
        </div>
     })
   } 
   </div>
  </div>
  <div  className="d-flex justify-content-center"class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
  <input type="range" min="1" max="5000" onChange={(e)=>{handlechange(e)}} />
  <h2 className='text-center'>Photos</h2>
  <div className="d-flex flex-wrap justify-content-center">
  {
    tem.map((h,i)=>{
      return <div className='w-25 border border-2 m-2 p-2'>
        <p>ID:{h?.id}</p>
        <h5>Title:{h?.title}</h5>
        <img src={h?.url} alt="" width="150px" height="150px"/>
        <a href={h?.thumbnailUrl}>{h?.thumbnailUrl}</a>
        
        </div>
    })
  }  
  </div>
  </div>
  <div class="tab-pane fade" id="todos-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
  <h2 className='text-center'>Todos</h2>
 
  {
    todos.map((f,i)=>{
      return <div className={f.completed?"bg-success":"bg-danger"}  >
         <p>ID:{f?.id}</p>
         <h5>Title:{f?.title}</h5>
         <p>{f?.completed}</p>
        </div>
    })
  }  
  
  </div>
  <div class="tab-pane fade" id="users-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
   <h2 className='text-center'>Users</h2>
   <div className="d-flex flex-wrap justify-content-center">
    {
    users.map((s,i)=>{
      return <div className='w-25 border border-2 m-2 p-2'>
          <h5>Id:{s?.id}</h5>
          <p>Name:{s?.name}</p>
          <p>User:{s?.username}</p>
          <p>Email:{s?.email}</p>
          <p>Address:{s?.address?.street}</p>
          <p>Suite:{s?.address?.suite}</p>
          <p>City:{s?.address?.city}</p>
          <p>ZipCode:{s?.address?.Zipcode}</p>
        
          

        </div>
        
    })
   } 
   </div>
  </div>
</div>
</div>
</div>
  )
}

export default App ;