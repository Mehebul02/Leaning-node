
// reading text asynchronously 

fstat.readFile('./text/read.txt', (err,data)=>{
    if(err){
        throw Error('Error reading text')
    }
    console.log(data);
})