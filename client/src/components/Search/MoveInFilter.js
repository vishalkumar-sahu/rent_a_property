import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const MoveInFilter = () => {

  const {setMoveIn, moveIn} = useContext(HouseContext);

  const moveInHandler = (event)=> {
        setMoveIn(event.target.value);
  }

  return (
    <>
        <div style={{paddingLeft:'10px', paddingRight:'10px', border:'1px solid #c9c7c7', borderRadius:'5px'}}>
          <input  type="date" id="moveIn" name="moveIn" value={moveIn} onChange={moveInHandler} />
        </div>
        
    </>
  );
};

export default MoveInFilter;