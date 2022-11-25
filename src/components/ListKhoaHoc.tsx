import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/configStore'
import { getApiList, List } from '../redux/reducers/ListDanhmucReducer';
import ListItem from '../components/ListItem'

type Props = {}

export default function AllList({}: Props) {
    const { arrList } = useSelector((state: RootState) => state.ListDanhmucReducer);

    const dispatch: AppDispatch = useDispatch();
  
    console.log({ arrList });
    useEffect(() => {
      //Gọi api
      const action = getApiList();
      dispatch(action);
    }, []);
  return (
    <>
    <div className='row gx-5'>
    {arrList.map((item: List, index: number) => {
      return <div className='' key={index}>
        <ListItem  prod={item} />
      </div>
    })}
  </div>
  </>
  )
}