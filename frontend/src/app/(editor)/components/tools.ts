//@ts-ignore
import Embed from '@editorjs/embed'
//@ts-ignore
import List from '@editorjs/list'
//@ts-ignore
import LinkTool from '@editorjs/link'
//@ts-ignore
import Header from '@editorjs/header'
//@ts-ignore
import Quote from '@editorjs/quote'
//@ts-ignore
import Marker from '@editorjs/marker'

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  marker: Marker,
  list: {
    class: List,
    inlineToolbar: true
  },
  linkTool: LinkTool,
  header: {
    class: Header,
    inlineToolbar: true
  },
  quote: {
    class: Quote,
    inlineToolbar: true
  },
}
