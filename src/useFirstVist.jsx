
import { useState, useEffect } from 'react';

const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      localStorage.setItem('hasVisitedBefore', 'true');
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  return isFirstVisit;
};

export default useFirstVisit;