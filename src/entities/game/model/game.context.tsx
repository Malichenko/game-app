import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type GameContextType = {
  enteredNumber: number;
  pickNumber: (num: number) => void;
};

const GameContext = createContext<GameContextType>({
  enteredNumber: 0,
  pickNumber: () => undefined,
});

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);

  const value = useMemo(
    () => ({ enteredNumber, pickNumber: setEnteredNumber }),
    [enteredNumber, setEnteredNumber],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
