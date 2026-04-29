// 3 independent API calls(fake them). fetch all 3 simultaneously using Promise.all()
//measure and log how long it took vs running them sequentially

function p1(){
    return new Promise((resolve)=>{
       setTimeout(()=>{resolve("API 1 result")}, 1000);
    })
}
function p2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("API 2 result")
        }, 2000)
    })
}
function p3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("API 3 result")
        }, 1000)
    })
}

async function fetchParallel(){
    console.time("Parallel");
    const results = await Promise.all([p1(), p2(), p3()]);
    console.log("Results:", results);
    console.timeEnd("Parallel");
}
fetchParallel();


async function fetchSequential(){
   try{
    console.time("Sequential");
    const first = await p1();
    console.log("First:", first);
    const second = await p2();
    console.log("Second:", second);
    const third = await p3();
    console.log("Third:", third);
    console.timeEnd("Sequential");
}catch(error){
    console.log("Error:", error);
}}
fetchSequential();

// Parallel execution took 2.007s
// Sequential execution took 4.041s

//console.time() and console.timeEnd() are just like stopwatch. console.time starts the stopwatch and timeEnd stops it.
//console.time("parallel"). parallel is just a label to identify which timer is being measured. it connects the start and end together. if label does not match it wont work.