
export const myStorage=()=>{
  let storage=window.sessionStorage;
  const saveData=(key,v)=>{
      storage.setItem(key,v)
  };
  const getData=(key)=>{
      return storage.getItem(key);
  };
  const clearData=()=>storage.clear();

  return {saveData,getData,clearData};
};

export const mySession=myStorage()