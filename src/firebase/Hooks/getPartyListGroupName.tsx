import { useEffect, useState } from 'react';
import { DB } from '../Config';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';

interface PartyListName {
    id: string;
    partyListPicture: string;
    pl_Name: string;
    // ... other fields
  }

const getPartyListNameGroup = (): PartyListName[] => {
  const [userPartyListName, setPartyListName] = useState<PartyListName[]>([]);
  const useCollection = collection(DB, 'partyListName');

  useEffect(() => {
    const getUSer = async (): Promise<void> => {
      try {
        const data: QuerySnapshot<DocumentData> = await getDocs(useCollection);
        setPartyListName(data.docs.map((doc) => doc.data() as PartyListName));
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching party list names:', error);
      }
    };

    getUSer();

    // Cleanup function
    return () => {
      // Perform any cleanup if needed
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return userPartyListName;
};

export default getPartyListNameGroup;
