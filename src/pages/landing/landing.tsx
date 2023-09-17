import React, { FC } from 'react';

interface ILanding {
  name?: string;
}
const Landing: FC<ILanding> = ({ name = 'HOME' }) => {
  /*const exerciseResult = useAppSelector(getExerciseResult);
 const exercises = useAppSelector(getExercises);
 const { SAVE_EXERCISES_RESULT, CLEAR_CURRENT_DATA } = useActions();
 const { data, isLoading, isError } = useGetUserDataQuery('vadim');
 console.log({ data, isLoading, isError });
 // const _data = JSON.stringify(data.items, null, 2);

 useEffect(() => {
   if (exerciseResult > 0) {
     SAVE_EXERCISES_RESULT({ exercises, exerciseResult });
     CLEAR_CURRENT_DATA();
   }
 }, [exerciseResult]);*/
  return <div>{name}</div>;
};

export default Landing;
