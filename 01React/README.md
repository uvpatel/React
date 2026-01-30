# Class Base Components

class ClassComponent extends React.Component {
    render(){
        return <h2>hello</h2>
    }
}

### Props


## States

- React componen brain which change according time
- not persistant untill browser relod
- rerender


```
const Card = ({title}) => {
  const [ hasLiked, setHasLiked ] = useState(false)
  return(
    <div>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)} className="text-neutral-200 bg-black py-2 px-4">
        {hasLiked ? "🩷" : '🩵'}
      </button>
    </div>
  )
}

```

##### Toggle
```
const Card = ({title}) => {
  const [ hasLiked, setHasLiked ] = useState(false)
  return(
    <div>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)} className="text-neutral-200 bg-black py-2 px-4">
        {hasLiked ? "🩷" : '🩵'}
      </button>
    </div>
  )
}
```


## Hooks
- special function they

useState
- for managing state
useEffect
- for handiling side effect like data fetching

useContext
-for sharing data across componens

useCallback
for optimizing callback functions

### Not recommended

() => setCount(count+1)

### Use Effect call for every 

```
const Card = ({title}) => {
  const [ hasLiked, setHasLiked ] = useState(false)
  const [count, setCount] = useState(0)


  // moutes in 2 time devlopment two times
  useEffect(()=> {
    console.log(`${title} has been liked: ${hasLiked}`);
    
  })
  return(
    // <div onClick={(prevState) => setCount(prevState+1)}>
    <div onClick={() => setCount(count+1)}>
      <h2>{title} : {count }</h2>

      <button onClick={() => setHasLiked(!hasLiked)} className="text-neutral-200 bg-black py-2 px-4">
        {hasLiked ? "🩷" : '🩵'}
      </button>
    </div>
  )
}

```

- so we use Depdency array

## Conditional rendary
