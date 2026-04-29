
function wait(ms){
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve ("Done!");
        }, ms)
    })
}
wait(2000).then((data)=>{
    console.log(data);
})