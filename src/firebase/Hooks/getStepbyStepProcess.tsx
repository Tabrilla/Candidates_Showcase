import { useEffect, useState } from 'react';
import { DB } from '../Config';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';

interface StepProcess {
  id: string;
  step: string;
  stepnum: string;
}

const getStepbyStepProcess = (): StepProcess[] => {

  const [userStepByStepProcess, setStepByStepProcess] = useState<StepProcess[]>([]);
  const useCollection = collection(DB, 'instructions');

  useEffect(() => {
    const getProcess = async (): Promise<void> => {
      try {
        const data: QuerySnapshot<DocumentData> = await getDocs(useCollection);
        setStepByStepProcess(data.docs.map((doc) => doc.data() as StepProcess))
      } catch (error) {
        console.error("ERROR", error);
      }
    };

    getProcess();
    
    return () => {

    }
  }, [])

  return userStepByStepProcess;
};

export default getStepbyStepProcess