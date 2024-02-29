
const Movie =  ({title,year,poster}) => {
   
  return (
<div className='h-[300px] w-[300px] rounded-md' >
<div className="img">
<img src={poster} alt="Movie_image" height={180} width={180}
    className="shadow-xl rounded-md"
/>

</div>
<div className="text-black">
<h1 className="text-white">{year}</h1>

</div>
<div className="title">
    <p className="text-white">{title}</p>
</div>

    </div>


 

    
  )
}

export default Movie