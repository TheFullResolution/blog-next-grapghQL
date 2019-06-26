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
  User,
} from '../../../generated/graphql'
import Router from 'next/router'
import { useState } from 'react'
import { SearchResults } from './SearchResults'

export type SearchBlogPost = Pick<BlogPost, 'id' | 'title'> & {
  readonly user: Pick<User, 'name'>
}

function routeToItem(item: SearchBlogPost, callback: () => void) {
  Router.push({
    pathname: '/post',
    query: { id: item.id },
  }).then(() => {
    callback()
  })
}

const MIN_STRING_VALUE = 3

interface OnChangeParams {
  searchTerm: string
  client: ApolloClient<{}>
  setLoading: (loading: boolean) => void
  setBlogPosts: (blogPosts: Readonly<SearchBlogPost[]>) => void
}

const getBlogPosts = debounce(
  async ({ searchTerm, client, setLoading, setBlogPosts }: OnChangeParams) => {
    if (searchTerm.length < MIN_STRING_VALUE) return

    setLoading(true)

    const res = await client.query<
      Search_Blog_Posts_QueryQuery,
      Search_Blog_Posts_QueryQueryVariables
    >({
      query: Search_Blog_Posts_QueryDocument,
      variables: { searchTerm },
    })
    setBlogPosts(res.data.blogPosts)
    setLoading(false)
  },
  300,
)

const Search: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [blogPosts, setBlogPosts] = useState<Readonly<SearchBlogPost[]>>([])

  return (
    <ApolloConsumer>
      {client => {
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          getBlogPosts({
            searchTerm: event.target.value,
            client,
            setLoading,
            setBlogPosts,
          })
        }
        resetIdCounter()
        return (
          <Downshift
            onStateChange={(option, state) => {
              if (option.selectedItem) {
                routeToItem(option.selectedItem, () => {
                  state.clearSelection()
  
                  setBlogPosts([])
                })
              }
            }}
            itemToString={item => (item === null ? '' : item.title)}
          >
            {({
              getInputProps,
              getItemProps,
              isOpen,
              inputValue,
              highlightedIndex,
            }) => (
              <div className={styles.container}>
                <input
                  {...getInputProps({
                    type: 'search',
                    placeholder: 'Search For An Item',
                    id: 'search',
                    className: loading ? styles.loading : '',
                    onChange,
                  })}
                />

                {isOpen && (
                  <SearchResults
                    loading={loading}
                    blogPosts={blogPosts}
                    getItemProps={getItemProps}
                    inputValue={inputValue}
                    highlightedIndex={highlightedIndex}
                  />
                )}
              </div>
            )}
          </Downshift>
        )
      }}
    </ApolloConsumer>
  )
}

export { Search }
