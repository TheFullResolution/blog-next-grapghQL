import * as styles from './search.scss'
import Downshift, { resetIdCounter } from 'downshift'
import { ApolloConsumer } from 'react-apollo'
import ApolloClient from 'apollo-client'
import debounce from 'lodash.debounce'
import {
  Search_Blog_Posts_QueryDocument,
  Search_Blog_Posts_QueryQuery,
  Search_Blog_Posts_QueryQueryVariables,
  BlogPost,
} from '../../../generated/graphql'
import Router from 'next/router'
import { useState } from 'react'

type SearchBlogPost = Pick<BlogPost, 'id' | 'title'>


function routeToItem(item: SearchBlogPost) {
  Router.push({
    pathname: '/post',
    query: { id: item.id },
  })
}

interface OnChangeParams {
  event: React.ChangeEvent<HTMLInputElement>
  client: ApolloClient<{}>
  setLoading: (loading: boolean) => void
  setBlogPosts: (blogPosts: Readonly<SearchBlogPost[]>) => void
}

const getBlogPosts = debounce(
  async ({ event, client, setLoading, setBlogPosts }: OnChangeParams) => {
    setLoading(true)

    const res = await client.query<
      Search_Blog_Posts_QueryQuery,
      Search_Blog_Posts_QueryQueryVariables
    >({
      query: Search_Blog_Posts_QueryDocument,
      variables: { searchTerm: event.target.value },
    })
    setBlogPosts(res.data.blogPosts)
    setLoading(false)
  },
)

const Search: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [blogPosts, setBlogPosts] = useState<Readonly<SearchBlogPost[]>>([])

  return (
    <ApolloConsumer>
      {client => {
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          event.persist()
          getBlogPosts({ event, client, setLoading, setBlogPosts })
        }
        resetIdCounter()
        return (
          <div className={styles.container}>
            <Downshift
              onChange={routeToItem}
              itemToString={item => (item === null ? '' : item.title)}
            >
              {({
                getInputProps,
                getItemProps,
                isOpen,
                inputValue,
                highlightedIndex,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search For An Item',
                      id: 'search',
                      className: loading ? 'loading' : '',
                      onChange,
                    })}
                  />

                  {isOpen && (
                    <ul>
                      {blogPosts.map((item, index) => (
                        <li
                          {...getItemProps({ item })}
                          key={item.id}
                        >
                          {item.title}
                        </li>
                      ))}
                      {!blogPosts.length && !loading && (
                        <li> Nothing Found {inputValue}</li>
                      )}
                    </ul>
                  )}
                </div>
              )}
            </Downshift>
          </div>
        )
      }}
    </ApolloConsumer>
  )
}

export { Search }
