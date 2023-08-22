import React from 'react'

const ArticleList = (props) => {
    // const article = props.post.map(() => { return <li key={article.id}> {article.title}</li>})
  return (
    <main>
        {/* <Article title={props.post[0].title} date={props.post[0].date} preview={props.post[0].preview} />
        <Article title={props.post[1].title} date={props.post[1].date} preview={props.post[1].preview} />
        <Article title={props.post[2].title} date={props.post[2].date} preview={props.post[2].preview} /> */}
        <Article posts = {props.posts} />
    </main>
  )
}


const Article = (props) => {
    return (
        <article>
            {props.posts.map((post) =>(
                <div key={post.id}>
               <h3>{post.title}</h3> 
               <small>{post.date}</small>
               <p>{post.preview}</p>
            </div> ))
 } </article>
    )
}

export default ArticleList
