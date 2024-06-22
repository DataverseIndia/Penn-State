//@ts-ignore
import Embed from '@editorjs/embed'
//@ts-ignore
import List from '@editorjs/list'
//@ts-ignore
import LinkTool from '@editorjs/link'
//@ts-ignore
import Image from '@editorjs/image'
//@ts-ignore
import Header from '@editorjs/header'
//@ts-ignore
import Quote from '@editorjs/quote'
//@ts-ignore
import Marker from '@editorjs/marker'

// import { uploadImage } from '@/app/utils/aws'

const uploadImageByURL = (e: any) => {
  let link = new Promise(( resolve, reject ) => {
    try {
      resolve(e)
    }
    catch(err) {
      reject(err)
    }
  })

  return link.then(url => {
    return {
      success: 1,
      file: {url}
    }
  })
}

// const uploadImageByFile = (e) => {
//   return uploadImage(e).then(url => {
//     if (url) {
//       return {
//         success: 1,
//         file: { url }
//       }
//     }
//   })
// }

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  marker: Marker,
  list: {
    class: List,
    inlineToolbar: true
  },
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImageByURL,
        // uploadByFile: uploadImageByFile,
      }
    }
  },
  header: {
    class: Header,
    inlineToolbar: true
  },
  quote: {
    class: Quote,
    inlineToolbar: true
  },
}
