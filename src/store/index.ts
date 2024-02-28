import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {},
});

//           ReturnType = Retorna o Tipo do retorno O.o         typeof store.getState aonde getState é uma funçao que retorna o estado
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//TypeUseSelectorHook<Tipo do estado global>
