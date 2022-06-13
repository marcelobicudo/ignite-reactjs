import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Marcelo Bicudo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse soluta rerum! Ratione odit soluta nobis voluptatem quae fugiat similique vitae? Nisi illo suscipit eligendi recusandae dolorem et consequuntur iure." 
      />
      <Post 
        author="João Silva" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse soluta rerum! Ratione odit soluta nobis voluptatem quae fugiat similique vitae? Nisi illo suscipit eligendi recusandae dolorem et consequuntur iure." 
      />
    </div>
  )
}
