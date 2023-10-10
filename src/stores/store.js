import { createStore } from "vuex";

export const store = createStore({
    state(){
        return{
        usuario:"",
        rol:"View",
    }
    },

    getters: {
        getMessage(state){
          return state.usuario
        }
      },
    
    mutations:{
        changeMessageValue(state, usuario){
          state.usuario = usuario
        },
      },
    
    actions:{
        changeMessageValue(context, usuario){
          context.commit('changeMessageValue', usuario)
        }
      }

    })
