import { createStore } from 'vuex'

const files = import.meta.globEager('./modules/*.js')

const modules = {}
Object.keys(files).forEach(file => {
  const module = files[file].default
  const moduleName = file.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})

export default createStore({
  modules: {
    ...modules
  }
})
