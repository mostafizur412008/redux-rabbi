import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/state/counter/counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
      <div className="card">
          <div className="card-header bg-secondery">
            <h2 className="text-warning">My counter app</h2>
          </div>
          <div className="card-body">
            <h1>{count}</h1>
            <div className="my-4">
                <button className="btn btn-success" onClick={() => dispatch(increment())}>Increase</button>
                <button className="btn mx-2 btn-danger" onClick={() => dispatch(decrement())}>Decrease</button>
            </div>
          </div>
      </div>
    )
  }
  
  export default Counter