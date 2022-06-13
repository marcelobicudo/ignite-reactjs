import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marcelobicudo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Bicudo</strong>
                            <time 
                                title="11 de Maio às 14:53h" 
                                dateTime='2022-06-13 14:53:00'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}