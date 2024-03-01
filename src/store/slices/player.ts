import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Iniciando com React",
          lessons: [
            { id: "aPWqr60gycI", title: "CSS Modules", duration: "13:45" },
            {
              id: "nKk2PhxtAkA",
              title: "Estilização do Post",
              duration: "10:05",
            },
            {
              id: "haV3Zl3jOnc",
              title: "Componente: Header",
              duration: "06:33",
            },
            {
              id: "iAnKFpIZuxo",
              title: "Componente: Sidebar",
              duration: "09:12",
            },
            { id: "RTZ62sm8s2M", title: "CSS Global", duration: "03:23" },
            {
              id: "bSO6ikrxSqk",
              title: "Form de comentários",
              duration: "11:34",
            },
            {
              id: "RsEeyZNiwUk",
              title: "Musica de video",
              duration: "03:33",
            },
            {
              id: "FLBayGbNgwI",
              title: "Musica de video",
              duration: "03:33",
            },
          ],
        },
        {
          id: "2",
          title: "Estrutura da aplicação",
          lessons: [
            {
              id: "QQXqvOciqAE",
              title: "Componente: Comment",
              duration: "13:45",
            },
            { id: "y8trd3gjJt0", title: "Responsividade", duration: "10:05" },
            {
              id: "kJQP7kiw5Fk",
              title: "Interações no JSX",
              duration: "06:33",
            },
            {
              id: "eJO5HU_7_1w",
              title: "Utilizando estado",
              duration: "09:12",
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },

  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },

    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        }
      }
    },
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
