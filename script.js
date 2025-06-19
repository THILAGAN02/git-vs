function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}

const obj={
    name:'Cris',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
//console.log(obj.name);
//console.log(obj.message());

const numbers=[1,2,3,-4,5,-6,7]
const mappednum=numbers.map((n)=>n*3)
console.log(mappednum)

const posNum=numbers.filter((n)=>n>0)
console.log(posNum)

const m=[1,3,2,4,5,12,23,45,34]
const s=m.filter((n)=>n%2!=0)
console.log(s)

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total)

const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500}
]
const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totalPrice)

const user={name:'CR7',password:'12345678'}
const {name,password}=user
console.log(password)

const number=[1,2,3,4,5,6]
const [first,second,third]=number
console.log(third);

const arr1=[1,2,3]
const copy=[...arr1,4,5,6]
console.log(copy)
const arr2=[7,8,9]
const a=[...copy,...arr2]
console.log(a)

//rest
function add2(...arguments){
    return arguments;
}
console.log(add2(1,2,3,4,5))

function call()
{
    console.log('from inside callback');
}
function fun(name,callback)
{
    callback()
    return `${name} from outside callback`
}
console.log(fun('function',call));
//async
async function fetchUsers()
{
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data=await response.json()
//console.log(data);
data.map((a)=>console.log(a.name))
}
catch(error)
{
    console.log(error);
}
}
fetchUsers()
