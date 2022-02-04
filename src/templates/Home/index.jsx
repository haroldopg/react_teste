import { Component } from 'react';
import { loadPost } from '../../utils/load-posts';
import './styles.css'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { InputSearch } from '../../components/InputSearch';



class Home extends Component {

  state = {
    posts: [],
    allposts: [],
    page: 0,
    postsPerpage: 30,
    searchInput: ''
  }

  async componentDidMount() {

    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerpage } = this.state
    const photosEndPosts = await loadPost()
    this.setState({
      posts: photosEndPosts.slice(page, postsPerpage),
      allposts: photosEndPosts
    }) // guardando o resultado no estado
  }

  loadMorePosts = () => {
    const { posts, allposts, page, postsPerpage } = this.state
    const nextPage = page + postsPerpage

    const nextPosts = allposts.slice(nextPage, nextPage + postsPerpage)
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })

  }

  handleInputSearch = (e) => {

    const { value } = e.target
    this.setState({ searchInput: value })

  }

  render() {
    const { posts, page, postsPerpage, allposts, searchInput } = this.state // usando o destruct e passando o valor de posts do estado para a constante "posts"
    const noMorePosts = page + postsPerpage >= allposts.length
    const filterPosts = !!searchInput ?
      allposts.filter((posts) => { return posts.title.toLowerCase().includes(searchInput.toLowerCase()) }) : posts
    return (
      <section className="container">
        {!!searchInput && (
          <>
            <h1>Search Posts : {searchInput}</h1> <br></br>

          </>
        )}

       <InputSearch handleInputSearch = {this.handleInputSearch} Search= {searchInput} />

        {filterPosts.length > 0 &&(
          <Posts posts={filterPosts} />
        )}

        {filterPosts.length == 0 &&(
          <h1>Não existem Posts para essa pesquisa</h1>
        )}
        
        <div className="container-button">
          {!searchInput && (
            <Button
              click={this.loadMorePosts}
              text="Load more Posts"
              disable={noMorePosts}
            />
          )}
        </div>
      </section>

    )
  }
}
export default Home;
