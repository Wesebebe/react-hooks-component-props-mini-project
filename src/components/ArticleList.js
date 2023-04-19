import React from 'react'

const ArticleList = (props) => {
    // const article = props.post.map(() => { return <li key={article.id}> {article.title}</li>})
  return (
    <main>
        <Article title={props.post[0].title} date={props.post[0].date} preview={props.post[0].preview} />
        <Article title={props.post[1].title} date={props.post[1].date} preview={props.post[1].preview} />
        <Article title={props.post[2].title} date={props.post[2].date} preview={props.post[2].preview} />
    </main>
  )
}


const Article = ({title, date="January 1, 1970", preview}) => {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default ArticleList
